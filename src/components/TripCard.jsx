import styles from '../styles/TripCard.module.css'
import mountain from '../images/mountain.jpeg'

export default function TripCard() {
  return (
    <div className={styles.main}>
      <div className={styles.imageContainer}>
        <img src={mountain} className={styles.locationImage} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.top}>
          <div className={styles.title}>한라산</div>
          <div className={styles.location}>제주시 &gt; 제주시내</div>
        </div>
        <div className={styles.tagList}>
          <div className={styles.tag}>#부모</div>
          <div className={styles.tag}>#관광</div>
          <div className={styles.tag}>#하이킹</div>
        </div>
      </div>
    </div>
  )
}
