import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import axios from 'axios'
const DOMAIN = 'http://localhost:8000'

function App() {
  const [sockets, setSockets] = useState({})
  const [receivedCount, setReceivedCount] = useState({})

  async function sendTask() {
    for (const lessonId in sockets) {
      const socket = sockets[lessonId]
      const data = {
        lesson_id: lessonId,
        assign: 'ALL',
        task_type: 'LINK',
        link_url: 'https://www.google.com'
      }
      socket.emit('create_task', data)
    }
  }

  useEffect(() => {
    // build lesson count object
    let lessonIds = ['182a7c97-f44c-45c0-b06e-5a6da69c3619', 'c9924558-e62f-4383-866a-72afcaea6f3d', '3d46f73b-cbde-4113-93f7-c924086e83a8']
    setReceivedCount(() => {
      let map = {}
      for (let lessonId of lessonIds) {
        map[lessonId] = 0
      }
      return map
    })

    async function getToken() {
      const tokenResponse = await axios.post(`${DOMAIN}/api/v1/token`)
      const access_token = tokenResponse.data.access_token
      return access_token
    }

    // connect sockets
    async function connectSocket() {
      const newSockets = {}
      for (let i = 0; i < lessonIds.length; i++) {
        const lessonId = lessonIds[i]
        const access_token = await getToken()
        console.log('access_token', access_token)
        const socket = io(`${DOMAIN}/classroom`, {
          auth: {
            access_token: access_token
          },
          transports: ['websocket'],
          path: '/sockets',
          query: {
            role: 'teacher',
            room_id: 'ba2be0a1-35b9-4255-a8df-de442c484d1c',
            lesson_id: lessonId
          }
        })

        socket.on('task_response', (data) => {
          console.log('data', data)
          let lessonId = data.lesson_id
          setReceivedCount((prev) => {
            return {
              ...prev,
              [lessonId]: prev[lessonId] + 1
            }
          })
        })

        newSockets[lessonId] = socket
      }
      console.log('newSockets', newSockets)
      setSockets(newSockets)
    }
    connectSocket()
  }, [])

  return (
    <div className='App'>
      <button onClick={sendTask}>Connect + Send Task</button>
      {Object.keys(receivedCount).map((lessonId, index) => (
        <p key={index}>
          {index + 1}. {lessonId}: {receivedCount[lessonId]}
        </p>
      ))}
    </div>
  )
}

export default App
