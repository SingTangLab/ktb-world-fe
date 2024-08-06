import React from 'react'
import styles from '../styles/Ticket.module.css'
import { useLocation } from 'react-router-dom'
import { laundryData, taxiData, gongguData, allData } from '../data/data' // 목업 데이터 임포트
import check from '../images/check.png'
import checkGray from '../images/notcheck.png'

export default function Ticket() {
  const location = useLocation()
  const pathname = location.pathname

  const isLaundry = pathname.includes('/laundry')
  const isTaxi = pathname.includes('/taxi')
  const isGonggu = pathname.includes('/gonggu')

  // 전체 페이지에서 세탁기, 택시, 공구 각각의 제목 붙여주는 방식으로 변경
  const title = isLaundry
    ? '세탁기'
    : isTaxi
    ? '택시'
    : isGonggu
    ? '공구'
    : '전체'

  // 세탁 티켓 데이터 가져오기
  const tickets = isLaundry
    ? laundryData.tickets
    : isTaxi
    ? taxiData.tickets
    : isGonggu
    ? gongguData.tickets
    : allData.tickets

  // 로그인된 유저의 ID (예시)
  const loggedInUserId = 1

  return tickets.map((ticket) =>
    ticket.category === '세탁' ? (
      <Laundry
        key={ticket.ticket_id}
        ticket={ticket}
        loggedInUserId={loggedInUserId}
      />
    ) : ticket.category === '택시' ? (
      <Taxi
        key={ticket.ticket_id}
        ticket={ticket}
        loggedInUserId={loggedInUserId}
      />
    ) : (
      <Gonggu
        key={ticket.ticket_id}
        ticket={ticket}
        loggedInUserId={loggedInUserId}
      />
    )
  )
}

function Laundry({ ticket, loggedInUserId }) {
  const isAuthor = ticket.user_id === loggedInUserId
  const isParticipant = ticket.participant_user.includes(loggedInUserId)

  return (
    <div className={styles.container}>
      <div className={`${styles.flag} ${styles.laundryFlag}`}>
        {ticket.category}
      </div>
      <div className={styles.main}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.title}>{ticket.title}</div>
            <div className={styles.description}>{ticket.description}</div>
            <div className={styles.info}>
              <div className={styles.color}>색상 : {ticket.laundry_color}</div>
              <div className={styles.dryer}>
                건조기 : {ticket.is_dry ? 'O' : 'X'}
              </div>
              <div className={styles.write}>
                <div className={styles.writer}>모집자 : {ticket.nickname}</div>
                <div className={styles.writeTime}>
                  작성 : {ticket.created_at.split('T')[1].slice(0, 5)}
                </div>
              </div>
            </div>
            <div className={styles.bottom}>
              <div className={styles.bottomLeft}>
                <div className={styles.start}>시작 : 07:40</div>
                <div className={styles.end}>종료 : 08:20</div>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.people}>
              {ticket.participant_user.length} / {ticket.capacity}
            </div>
            <div className={styles.status}>
              {ticket.status === '마감' ? (
                isAuthor ? (
                  '마감'
                ) : (
                  <img
                    src={check}
                    className={styles.statusImage}
                    alt='Status'
                  />
                )
              ) : isAuthor ? (
                '마감하기'
              ) : (
                <img
                  src={isParticipant ? check : checkGray}
                  className={styles.statusImage}
                  alt='Status'
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Taxi({ ticket, loggedInUserId }) {
  const isAuthor = ticket.user_id === loggedInUserId
  const isParticipant = ticket.participant_user.includes(loggedInUserId)

  return (
    <div className={styles.container}>
      <div className={`${styles.flag} ${styles.taxiFlag}`}>
        {ticket.category}
      </div>
      <div className={styles.main}>
        <div key={ticket.ticket_id} className={styles.ticket}>
          <div className={styles.top}>
            <div className={styles.left}>
              <div className={styles.title}>{ticket.title}</div>
              <div className={styles.description}>{ticket.description}</div>
              <div className={styles.info}>
                <div className={styles.write}>
                  <div className={styles.writer}>
                    모집자 : {ticket.nickname}
                  </div>
                  <div className={styles.writeTime}>
                    작성 : {ticket.created_at.split('T')[1].slice(0, 5)}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.people}>
                {ticket.participant_user.length} / {ticket.capacity}
              </div>
              <div className={styles.status}>
                {ticket.status === '마감' ? (
                  isAuthor ? (
                    '마감'
                  ) : (
                    <img
                      src={check}
                      className={styles.statusImage}
                      alt='Status'
                    />
                  )
                ) : isAuthor ? (
                  '마감하기'
                ) : (
                  <img
                    src={isParticipant ? check : checkGray}
                    className={styles.statusImage}
                    alt='Status'
                  />
                )}
              </div>
            </div>
          </div>
          <div className={styles.bottom}>
            <div className={styles.start}>
              출발: {ticket.start_time?.split('T')[1].slice(0, 5)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Gonggu({ ticket, loggedInUserId }) {
  const isAuthor = ticket.user_id === loggedInUserId
  const isParticipant = ticket.participant_user.includes(loggedInUserId)

  return (
    <div className={styles.container}>
      <div className={`${styles.flag} ${styles.gongguFlag}`}>
        {ticket.category}
      </div>
      <div className={styles.main}>
        <div key={ticket.ticket_id} className={styles.ticket}>
          <div className={styles.top}>
            <div className={styles.left}>
              <div className={styles.title}>{ticket.title}</div>
              <div className={styles.description}>{ticket.description}</div>
              <div className={styles.info}>
                <div className={styles.write}>
                  <div className={styles.writer}>
                    모집자 : {ticket.nickname}
                  </div>
                  <div className={styles.writeTime}>
                    작성 : {ticket.created_at.split('T')[1].slice(0, 5)}
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.right}>
              <div className={styles.people}>
                {ticket.participant_user.length} / {ticket.capacity}
              </div>
              <div className={styles.status}>
                {ticket.status === '마감' ? (
                  isAuthor ? (
                    '마감'
                  ) : (
                    <img
                      src={check}
                      className={styles.statusImage}
                      alt='Status'
                    />
                  )
                ) : isAuthor ? (
                  '마감하기'
                ) : (
                  <img
                    src={isParticipant ? check : checkGray}
                    className={styles.statusImage}
                    alt='Status'
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
