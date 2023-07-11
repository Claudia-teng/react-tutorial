import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Index.module.css'

function Index() {
  let navigate = useNavigate()

  function navigateTo(page) {
    navigate(`/${page}`)
  }
  return (
    <div className={styles.container}>
      <h1>- React Tutorial -</h1>
      <div>
        <button className={styles.button} onClick={() => navigateTo('weather')}>
          Weather
        </button>
        <button className={styles.button} onClick={() => navigateTo('culture')}>
          Culture
        </button>
      </div>
    </div>
  )
}

export default Index
