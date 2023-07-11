import axios from 'axios'
export const checkListApi = {
  getCheckList: async () => {
    try {
      const response = await axios.get('https://64acea589edb4181202ff208.mockapi.io/expenses')
      return response.data
    } catch (error) {
      console.error(error)
      throw new Error('Failed to fetch data')
    }
  }
}
