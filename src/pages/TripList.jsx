import { useLocation } from 'react-router-dom'
import styles from '../styles/TripList.module.css'
import TripCard from '../components/TripCard'

export function TripListPage() {
  const location = useLocation()
  const pathname = location.pathname
  const trips = Array.from({ length: 10 })

  const name = pathname.includes('north-east')
    ? '조천, 구좌'
    : pathname.includes('south-east')
    ? '표선, 성산'
    : pathname.includes('south-west')
    ? '대정, 안덕'
    : pathname.includes('north-west')
    ? '한경, 한림, 애월'
    : pathname.includes('north')
    ? '제주'
    : '중문, 서귀포, 남원'

  return (
    <div className={styles.main}>
      <div className={styles.pageaTitle}>{name}</div>
      <div className={styles.ticketList}>
        {trips.map((_, index) => (
          <TripCard key={index} />
        ))}
      </div>
    </div>
  )
}
