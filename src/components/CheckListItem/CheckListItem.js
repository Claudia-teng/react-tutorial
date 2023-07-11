import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './CheckListItem.module.css'

function CheckListItem({ item }) {
  return (
    <>
      <p>{item.name}</p>
      <p>{item.done ? 'Yes' : 'No'} </p>
    </>
  )
}

export default CheckListItem
