import React, { useState } from 'react'
import styles from '../styles/TripEntry.module.css'
import { useNavigate } from 'react-router-dom'

export default function TripEntry() {
  const navigate = useNavigate()
  const [visibleImage, setVisibleImage] = useState('map')

  const handleMouseEnter = (region) => {
    setVisibleImage(`map-${region}`)
  }

  const handleMouseLeave = () => {
    setVisibleImage('map')
  }

  return (
    <div className={styles.main}>
      <div className={styles.islandContainer}>
        <img
          src={require('../images/map.jpg')}
          className={`${styles.island} ${
            visibleImage === 'map' ? styles.visible : ''
          }`}
          alt='map'
        />
        <img
          src={require('../images/map-jeju.jpg')}
          className={`${styles.island} ${
            visibleImage === 'map-jeju' ? styles.visible : styles.hidden
          }`}
          alt='map-jeju'
        />
        <img
          src={require('../images/map-jochun.jpg')}
          className={`${styles.island} ${
            visibleImage === 'map-jochun' ? styles.visible : styles.hidden
          }`}
          alt='map-jochun'
        />
        <img
          src={require('../images/map-sungsan.jpg')}
          className={`${styles.island} ${
            visibleImage === 'map-sungsan' ? styles.visible : styles.hidden
          }`}
          alt='map-sungsan'
        />
        <img
          src={require('../images/map-jungmoon.jpg')}
          className={`${styles.island} ${
            visibleImage === 'map-jungmoon' ? styles.visible : styles.hidden
          }`}
          alt='map-jungmoon'
        />
        <img
          src={require('../images/map-daejung.jpg')}
          className={`${styles.island} ${
            visibleImage === 'map-daejung' ? styles.visible : styles.hidden
          }`}
          alt='map-daejung'
        />
        <img
          src={require('../images/map-hankyung.jpg')}
          className={`${styles.island} ${
            visibleImage === 'map-hankyung' ? styles.visible : styles.hidden
          }`}
          alt='map-hankyung'
        />
      </div>
      <div className={styles.name}>
        <div
          className={`${styles.region} ${styles.jeju}`}
          onClick={() => navigate('/trip/north')}
          onMouseEnter={() => handleMouseEnter('jeju')}
          onMouseLeave={handleMouseLeave}
        >
          제주
        </div>
        <div
          className={`${styles.region} ${styles.jochun}`}
          onClick={() => navigate('/trip/north-east')}
          onMouseEnter={() => handleMouseEnter('jochun')}
          onMouseLeave={handleMouseLeave}
        >
          <p>조천</p>
          <p>구좌</p>
        </div>
        <div
          className={`${styles.region} ${styles.sungsan}`}
          onClick={() => navigate('/trip/south-east')}
          onMouseEnter={() => handleMouseEnter('sungsan')}
          onMouseLeave={handleMouseLeave}
        >
          <p>표선</p>
          <p>성산</p>
        </div>
        <div
          className={`${styles.region} ${styles.jungmoon}`}
          onClick={() => navigate('/trip/south')}
          onMouseEnter={() => handleMouseEnter('jungmoon')}
          onMouseLeave={handleMouseLeave}
        >
          <span>중문</span>
          <span>서귀포</span>
          <span>남원</span>
        </div>
        <div
          className={`${styles.region} ${styles.daejung}`}
          onClick={() => navigate('/trip/south-west')}
          onMouseEnter={() => handleMouseEnter('daejung')}
          onMouseLeave={handleMouseLeave}
        >
          <span>대정</span>
          <span>안덕</span>
        </div>
        <div
          className={`${styles.region} ${styles.hankyung}`}
          onClick={() => navigate('/trip/north-west')}
          onMouseEnter={() => handleMouseEnter('hankyung')}
          onMouseLeave={handleMouseLeave}
        >
          <span>한경</span>
          <span>한림</span>
          <p>애월</p>
        </div>
      </div>
    </div>
  )
}
