import axios from 'axios'
export const productApi = {
  getProductList: async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      return response.data
    } catch (error) {
      console.error(error)
      throw new Error('Failed to fetch data')
    }
  }
}
