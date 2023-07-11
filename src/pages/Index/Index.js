import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GoalInput from '../../components/GoalInput/GoalInput'
import GoalItem from '../../components/GoalItem/GoalItem'
// import styles from './Index.module.css'

function Index() {
  return (
    <div>
      <h1>- Styling in React -</h1>
      <GoalInput />
      <GoalItem />
    </div>
  )
}

export default Index
