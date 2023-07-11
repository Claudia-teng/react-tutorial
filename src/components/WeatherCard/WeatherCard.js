import { useState, useEffect } from 'react'
import styles from './WeatherCard.module.css'
import SunIcon from '../../assets/sun.png'

function WeatherCard({ weatherDetail }) {
  return (
    <div className={styles.card}>
      <img className={styles.image} alt='sun' src={SunIcon} />
      <h1>{weatherDetail.temperature}</h1>
      <div>
        <span>Wind: </span>
        <span>{weatherDetail.wind} </span>
      </div>
      <p>{weatherDetail.description}</p>
      <div className={styles.forecast}>
        <h3>Forecast for the future 3 days</h3>
        {weatherDetail.forecast?.map((item) => {
          return (
            <div>
              <h4>
                Day {item.day}: {item.temperature}
              </h4>
              <div>
                <span>Wind: {item.wind}</span>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default WeatherCard
