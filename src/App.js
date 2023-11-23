import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import axios from 'axios'
const DOMAIN = 'http://localhost:8000'

function App() {
  const [sockets, setSockets] = useState({})
  const [receivedCount, setReceivedCount] = useState({})
  const roomId = 'ba2be0a1-35b9-4255-a8df-de442c484d1c'

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

    console.log('socket emit success')
  }

  useEffect(() => {
    async function getToken() {
      const tokenResponse = await axios.post(`${DOMAIN}/api/v1/token`)
      const access_token = tokenResponse.data.access_token
      return access_token
    }

    async function connectSocket() {
      // build lesson count object
      const response = await axios.get(`${DOMAIN}/api/v1/lessons/all/${roomId}`)
      const lessonIds = response.data

      setReceivedCount(() => {
        let map = {}
        for (let lessonId of lessonIds) {
          map[lessonId] = 0
        }
        return map
      })

      // connect sockets
      const newSockets = {}
      for (let i = 0; i < lessonIds.length; i++) {
        const lessonId = lessonIds[i]
        const access_token = await getToken()
        const socket = io(`${DOMAIN}/classroom`, {
          auth: {
            access_token: access_token
          },
          transports: ['websocket'],
          path: '/sockets',
          query: {
            role: 'teacher',
            room_id: roomId,
            lesson_id: lessonId
          }
        })

        socket.on('task_response', (data) => {
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
      console.log('socket connect success')
      setSockets(newSockets)
    }
    connectSocket()
  }, [])

  return (
    <div className='App'>
      <button onClick={sendTask}>Send Task</button>
      {Object.keys(receivedCount).map((lessonId, index) => (
        <p key={index}>
          {index + 1}. {lessonId}: {receivedCount[lessonId]}
        </p>
      ))}
    </div>
  )
}

export default App
