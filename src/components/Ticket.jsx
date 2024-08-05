import styles from '../styles/Ticket.module.css'
import check from '../images/check.png'
import { useLocation } from 'react-router-dom'

export default function Ticket() {
  const location = useLocation()
  const pathname = location.pathname

  const isLaundry = pathname.includes('/laundry')
  const isTaxi = pathname.includes('/taxi')
  const isGonggu = pathname.includes('/gonggu')
  // TODO: 전체 페이지에서 세탁기, 택시, 공구 각각의 제목 붙여주는 방식으로 변경
  const title = isLaundry
    ? '세탁기'
    : isTaxi
    ? '택시'
    : isGonggu
    ? '공구'
    : '전체'

  return (
    <div className={styles.container}>
      <div className={styles.flag}>{title}</div>
      <div className={styles.main}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.write}>
              <div className={styles.writer}>erica</div>
              <div className={styles.writeTime}>07:05</div>
            </div>
            <div className={styles.title}>흰 빨래 1명 급구!!!!!</div>
            <div className={styles.description}>5장 이내만 가능합니다~~~~</div>
            <div className={styles.info}>
              <div className={styles.color}>색깔: 어두운 색, 밝은 색</div>
              <div className={styles.dryer}>건조기: O</div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.people}>3/4</div>
            <div classnane={styles.status}>
              <img src={check} className={styles.statusImage} />
            </div>
          </div>
        </div>
        {isLaundry && (
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              <div className={styles.start}>시작: 07:40</div>
              <div className={styles.end}>종료: 08:20</div>
            </div>
            <div className={styles.bottomRight}>빨래중</div>
          </div>
        )}
        {isTaxi && (
          <div className={styles.bottom}>
            <div className={styles.start}>출발: 07:40</div>
          </div>
        )}
      </div>
    </div>
  )
}
