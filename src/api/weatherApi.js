import axios from 'axios'
export const weatherApi = {
  getWeatherDetail: async () => {
    try {
      const response = await axios.get('https://goweather.herokuapp.com/weather/taipei')
      return response.data
    } catch (error) {
      console.error(error)
      throw new Error('Failed to fetch data')
    }
  }
}
