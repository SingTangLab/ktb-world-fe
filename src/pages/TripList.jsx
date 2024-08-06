import styles from '../styles/TripList.module.css'
import TripCard from '../components/TripCard'
import { useEffect, useState } from 'react'

export function TripListPage({ section }) {
  const [data, setData] = useState([])
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/places/${section ?? 0}`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        )
        const responseData = await response.json()
        setData(responseData) // Assuming responseData has a `places` field
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [section])

  return (
    <div className={styles.main}>
      <div className={styles.pageTitle}>{name}</div>
      <div className={styles.ticketList}>
        {data.map((trip) => (
          <TripCard data={trip} key={trip.place_id} />
        ))}
      </div>
    </div>
  )
}
