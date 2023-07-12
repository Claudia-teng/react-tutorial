import { useNavigate } from 'react-router-dom'
import styles from './Index.module.sass'

function Index() {
  let navigate = useNavigate()

  function navigateTo(page) {
    navigate(`/${page}`)
  }

  return (
    <div className={styles.container}>
      <h1>- React Tutorial -</h1>
      <div>
        <button className={styles.button} onClick={() => navigateTo('product')}>
          My Products
        </button>
      </div>
    </div>
  )
}

export default Index
