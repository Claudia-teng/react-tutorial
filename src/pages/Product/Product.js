import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
import styles from './Product.module.sass'
import ProductItem from '../../components/ProductItem/ProductItem'
import { productApi } from '../../api/productApi'

function Product() {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    async function getProductList() {
      const response = await productApi.getProductList()
      setProductList(response)
    }

    getProductList()
  }, [])

  return (
    <div className={styles.container}>
      {productList.map((product) => {
        return <ProductItem product={product} key={product.id} />
      })}
    </div>
  )
}

export default Product
