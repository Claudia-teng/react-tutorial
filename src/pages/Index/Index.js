import { useNavigate } from 'react-router-dom'

function Index() {
  let navigate = useNavigate()

  function navigateTo(page) {
    navigate(`/${page}`)
  }

  return (
    <div>
      <h1>- React Tutorial -</h1>
      <div>
        <button onClick={() => navigateTo('counter')}>Counter</button>
      </div>
    </div>
  )
}

export default Index
