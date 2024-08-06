import styles from '../styles/TripEntry.module.css'
import island from '../images/jejudo.png'

export default function TripEntry() {
  return (
    <div className={styles.main}>
      <img src={island} className={styles.island} />
      <div className={styles.jeju}>제주</div>
    </div>
  )
}
