// import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import styles from './ProductItem.module.sass'
import StarIcon from '../../assets/star.png'

function Product({ product }) {
  return (
    <>
      <div className={styles.card}>
        <img alt='product' src={product.image} />
        <p>{product.title}</p>
        <p className={styles.price}>${product.price}</p>
        <div className={styles.rating}>
          <img alt='rating' src={StarIcon} />
          <span>
            {product.rating.rate} {`(${product.rating.count})`}
          </span>
        </div>
      </div>
    </>
  )
}

export default Product
