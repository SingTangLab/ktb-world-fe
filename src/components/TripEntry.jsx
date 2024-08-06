import React, { useCallback, useState } from 'react'
import styles from '../styles/TripEntry.module.css'
import { useNavigate } from 'react-router-dom'

export default function TripEntry() {
  const navigate = useNavigate()
  const [backgroundImage, setBackgroundImage] = useState('map.jpg')

  const handleMouseEnter = useCallback((region) => {
    setBackgroundImage(`map-${region}.jpg`)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setBackgroundImage('map.jpg')
  }, [])

  return (
    <div className={styles.main}>
      <div
        className={styles.island}
        style={{
          backgroundImage: `url(${require(`../images/${backgroundImage}`)})`,
        }}
      />
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
