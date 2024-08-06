import styles from '../styles/TripList.module.css'
import TripCard from '../components/TripCard'
import { tripData } from '../data/data'

export function TripListPage({ section }) {
  const name =
    section === '2'
      ? '조천, 구좌'
      : section === '3'
      ? '표선, 성산'
      : section === '5'
      ? '대정, 안덕'
      : section === '6'
      ? '한경, 한림, 애월'
      : section === '1'
      ? '제주'
      : section === '4'
      ? '중문, 서귀포, 남원'
      : '전체'

  return (
    <div className={styles.main}>
      <div className={styles.pageTitle}>{name}</div>
      <div className={styles.ticketList}>
        {tripData.places.map((trip) => (
          <TripCard data={trip} key={trip.place_id} />
        ))}
      </div>
    </div>
  )
}
