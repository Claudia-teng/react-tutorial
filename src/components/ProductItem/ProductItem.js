// import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import styles from './ProductItem.module.sass'
import StarIcon from '../../assets/star.png'

function Product({}) {
  return (
    <>
      <div className={styles.card}>
        <img alt='product' src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' />
        <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
        <p className={styles.price}>$109.95</p>
        <div className={styles.rating}>
          <img alt='rating' src={StarIcon} />
          <span>3.9 {`(120)`}</span>
        </div>
      </div>
    </>
  )
}

export default Product
