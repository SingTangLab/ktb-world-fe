import styles from '../styles/FloatingIcon.module.css'
import plus from '../images/plus.png'
import { useLocation, useNavigate } from 'react-router-dom'

export default function FloatingIcon() {
  const location = useLocation()
  const pathname = location.pathname
  const navigate = useNavigate()

  if (
    pathname === '/' ||
    pathname === '/home' ||
    pathname.includes('write') ||
    pathname.includes('trip') ||
    pathname.includes('user') ||
    pathname.includes('login')
  ) {
    return null
  }

  const url =
    pathname === '/laundry'
      ? '/laundry/write'
      : pathname === '/taxi'
      ? '/taxi/write'
      : '/gonggu/write'

  return (
    <div className={styles.main} onClick={() => navigate(url)}>
      <img src={plus} className={styles.plusIcon} />
    </div>
  )
}
