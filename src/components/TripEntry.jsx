import { useState, useEffect } from 'react'
import styles from '../styles/TripEntry.module.css'
import { useNavigate, useLocation } from 'react-router-dom'

export default function TripEntry() {
  const navigate = useNavigate()
  const location = useLocation()

  // URL에서 query parameter를 추출
  const queryParams = new URLSearchParams(location.search)
  const section = queryParams.get('section')
  const [backgroundImage, setBackgroundImage] = useState('map.jpg')

  const handleMouseEnter = (region) => {
    setBackgroundImage(`map-${region}.jpg`)
  }

  const handleMouseLeave = () => {
    setBackgroundImage('map.jpg')
  }

  const handleClick = (section) => {
    navigate({
      pathname: '/trip',
      search: `?section=${section}`,
    })
  }

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
          onClick={() => handleClick('1')}
          onMouseEnter={() => handleMouseEnter('jeju')}
          onMouseLeave={handleMouseLeave}
        >
          제주
        </div>
        <div
          className={`${styles.region} ${styles.jochun}`}
          onClick={() => handleClick('2')}
          onMouseEnter={() => handleMouseEnter('jochun')}
          onMouseLeave={handleMouseLeave}
        >
          <p>조천</p>
          <p>구좌</p>
        </div>
        <div
          className={`${styles.region} ${styles.sungsan}`}
          onClick={() => handleClick('3')}
          onMouseEnter={() => handleMouseEnter('sungsan')}
          onMouseLeave={handleMouseLeave}
        >
          <p>표선</p>
          <p>성산</p>
        </div>
        <div
          className={`${styles.region} ${styles.jungmoon}`}
          onClick={() => handleClick('4')}
          onMouseEnter={() => handleMouseEnter('jungmoon')}
          onMouseLeave={handleMouseLeave}
        >
          <span>중문</span>
          <span>서귀포</span>
          <span>남원</span>
        </div>
        <div
          className={`${styles.region} ${styles.daejung}`}
          onClick={() => handleClick('5')}
          onMouseEnter={() => handleMouseEnter('daejung')}
          onMouseLeave={handleMouseLeave}
        >
          <span>대정</span>
          <span>안덕</span>
        </div>
        <div
          className={`${styles.region} ${styles.hankyung}`}
          onClick={() => handleClick('6')}
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
