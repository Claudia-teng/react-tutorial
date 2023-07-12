import { useState, useEffect } from 'react'
import styles from './Counter.module.sass'

const Counter = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const decrement = () => {
    setCount((prevCount) => prevCount - 1)
  }

  useEffect(() => {
    console.log('Count updated:', count)
  }, [count])

  useEffect(() => {
    console.log('Component mounted')

    return () => {
      console.log('Component unmounted')
    }
  }, [])

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button className={styles.button} onClick={increment}>
        Increment
      </button>
      <button className={styles.button} onClick={decrement}>
        Decrement
      </button>
    </div>
  )
}

export default Counter
