import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './CheckList.module.css'
import CheckListItem from '../../components/CheckListItem/CheckListItem'

function CheckList() {
  const checkList = [
    {
      id: 1,
      name: 'Go Grocery',
      done: true
    }
  ]

  return (
    <>
      <h1>My CheckList</h1>
      {checkList.map((item) => {
        return <CheckListItem item={item} key={item.id} />
      })}
    </>
  )
}

export default CheckList
