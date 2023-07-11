import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './GoalInput.module.css'

function GoalInput() {
  return (
    <>
      <div>
        <p>Goal</p>
        <input />
        <button>Add Goal</button>
      </div>
    </>
  )
}

export default GoalInput
