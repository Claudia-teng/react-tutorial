import { useState, useEffect } from 'react'
import WeatherCard from '../../components/WeatherCard/WeatherCard'
import { weatherApi } from '../../api/weatherApi'
import styles from './Weather.module.css'

function Weather() {
  const [weatherDetail, setWeatherDetail] = useState(null)

  async function getWeatherDetail() {
    const list = await weatherApi.getWeatherDetail()
    setWeatherDetail(list)
    console.log('list', list)
  }

  useEffect(() => {
    getWeatherDetail()
  }, [])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Today, taipei's weather is ...</h1>
      {!weatherDetail ? <div className={styles.loading}></div> : <WeatherCard weatherDetail={weatherDetail} />}
    </div>
  )
}

export default Weather
