import styles from '../styles/TripCard.module.css'
import mountain from '../images/mountain.jpeg'

export default function TripCard({ data }) {
  const tagArray = data.tag.split(', ')

  return (
    <div className={styles.main}>
      <div className={styles.imageContainer}>
        <img src={data.thumbnail_url} className={styles.locationImage} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.top}>
          <div className={styles.title}>{data.title}</div>
          <div className={styles.location}>{data.address}</div>
        </div>
        <div className={styles.tagList}>
          {tagArray.map((tag, index) => {
            return (
              <div key={index} className={styles.tag}>
                #{tag}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
