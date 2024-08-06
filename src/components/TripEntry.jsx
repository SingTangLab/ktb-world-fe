import styles from '../styles/TripEntry.module.css'
import island from '../images/jejudo.png'
import { useNavigate } from 'react-router-dom'

export default function TripEntry() {
  const navigate = useNavigate()

  return (
    <div className={styles.main}>
      <img src={island} className={styles.island} />
      <div className={styles.name}>
        <div className={styles.jeju} onClick={() => navigate('/trip/north')}>
          제주
        </div>
        <div
          className={styles.jochun}
          onClick={() => navigate('/trip/north-east')}
        >
          <p>조천</p>
          <p>구좌</p>
        </div>
        <div
          className={styles.sungsan}
          onClick={() => navigate('/trip/south-east')}
        >
          <p>표선</p>
          <p>성산</p>
        </div>
        <div
          className={styles.jungmoon}
          onClick={() => navigate('/trip/south')}
        >
          <span>중문</span>
          <span>서귀포</span>
          <span>남원</span>
        </div>
        <div
          className={styles.daejung}
          onClick={() => navigate('/trip/south-west')}
        >
          <span>대정</span>
          <span>안덕</span>
        </div>
        <div
          className={styles.hankyung}
          onClick={() => navigate('/trip/north-west')}
        >
          <span>한경</span>
          <span>한림</span>
          <p>애월</p>
        </div>
      </div>
    </div>
  )
}
