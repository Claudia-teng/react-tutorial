import { useState, useEffect } from 'react'
import styles from './Product.module.sass'
import ProductItem from '../../components/ProductItem/ProductItem'
import { productApi } from '../../api/productApi'

function Product() {
  return (
    <div className={styles.container}>
      <ProductItem />
    </div>
  )
}

export default Product
