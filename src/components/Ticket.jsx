import React, { useState, useEffect } from 'react'
import styles from '../styles/Ticket.module.css'
import { useSearchParams, useLocation, Link } from 'react-router-dom'
import check from '../images/check.png'
import checkGray from '../images/notcheck.png'
import DraggableModal from './DraggableModal'

export default function Ticket({ datas = [] }) {
  const location = useLocation()
  const pathname = location.pathname

  const [searchParams] = useSearchParams()
  const filter = searchParams.get('filter') || '전체'

  const isLaundry = pathname.includes('/laundry')
  const isTaxi = pathname.includes('/taxi')
  const isGonggu = pathname.includes('/gonggu')
  const isUser = pathname.includes('/user')

  // 로그인된 유저의 ID (예시)
  const loggedInUserId = 20

  // Ensure datas is an array before mapping
  return Array.isArray(datas) ? (
    datas.map((data) =>
      data.category === '세탁' ? (
        <Laundry
          key={data.ticket_id}
          isUser={isUser}
          ticket={data}
          loggedInUserId={loggedInUserId}
        />
      ) : data.category === '택시' ? (
        <Taxi
          key={data.ticket_id}
          isUser={isUser}
          ticket={data}
          loggedInUserId={loggedInUserId}
        />
      ) : (
        <Gonggu
          key={data.ticket_id}
          isUser={isUser}
          ticket={data}
          loggedInUserId={loggedInUserId}
        />
      )
    )
  ) : (
    <p>No data available</p> // Fallback if datas is not an array
  )
}

function Laundry({ isUser, ticket, loggedInUserId }) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalContent, setModalContent] = useState('')
  const [modalTitle, setModalTitle] = useState('')
  const [okButtonProps, setOkButtonProps] = useState({})
  const [okText, setOkText] = useState('확인')
  const [cancelText, setCancelText] = useState('닫기')
  const [isChecked, setIsChecked] = useState(
    ticket.participant_user.includes(loggedInUserId)
  )
  const [participant, setParticipant] = useState(ticket.participant_user.length)
  const [isClosed, setIsClosed] = useState(
    ticket.status === '마감' || participant === ticket.capacity
  )

  const isAuthor = ticket.user_id === loggedInUserId
  const isParticipant = ticket.participant_user.includes(loggedInUserId)

  useEffect(() => {
    if (participant === ticket.capacity || ticket.status === '마감') {
      setIsClosed(true)
    }
  }, [participant])

  const showModal = (
    content,
    title,
    okProps,
    okTxt = '확인',
    cancelTxt = '닫기'
  ) => {
    setModalContent(content)
    setModalTitle(title)
    setOkButtonProps(okProps)
    setOkText(okTxt)
    setCancelText(cancelTxt)
    setIsModalVisible(true)
  }

  const handleOk = () => {
    console.log('확인 클릭됨')
    setIsChecked(true)
    setIsModalVisible(false)
    setParticipant(participant + 1)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleClose = () => {
    setIsClosed(true)
    setIsModalVisible(false)
  }

  return (
    <Link
      className={styles.container}
      to={isUser && `/user/${ticket.ticket_id}`}
    >
      <div className={styles.main}>
        <div className={styles.top}>
          <div className={styles.left}>
            <div className={styles.topFirst}>
              <div className={`${styles.flag} ${styles.laundryFlag}`}>
                {ticket.category}
              </div>
              <div className={styles.titleItem}>
                <div className={styles.title}>{ticket.title}</div>
              </div>
            </div>
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
              {participant} / {ticket.capacity}
            </div>
            <div className={styles.status}>
              {isClosed ? (
                '마감'
              ) : ticket.status === '마감' ? (
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
                <span
                  onClick={() =>
                    showModal(
                      '인원 모집이 완료되지 않았습니다. 정말 마감하시겠습니까?',
                      '마감 확인',
                      {
                        style: { backgroundColor: 'red', borderColor: 'red' },
                        onClick: handleClose,
                      },
                      '마감',
                      '닫기'
                    )
                  }
                >
                  마감하기
                </span>
              ) : (
                <img
                  src={isChecked ? check : checkGray}
                  className={styles.statusImage}
                  alt='Status'
                  onClick={() =>
                    !isChecked &&
                    showModal(
                      '확인 버튼을 누르면 참여가 확정됩니다.',
                      '참여 확인'
                    )
                  }
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <DraggableModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        title={modalTitle}
        content={modalContent}
        okButtonProps={okButtonProps}
        okText={okText}
        cancelText={cancelText}
      />
    </Link>
  )
}

function Taxi({ isUser, ticket, loggedInUserId }) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalContent, setModalContent] = useState('')
  const [modalTitle, setModalTitle] = useState('')
  const [okButtonProps, setOkButtonProps] = useState({})
  const [okText, setOkText] = useState('확인')
  const [cancelText, setCancelText] = useState('닫기')
  const [isChecked, setIsChecked] = useState(
    ticket?.participant_users.includes(loggedInUserId)
  )
  const [participant, setParticipant] = useState(
    ticket.participant_users.length
  )
  const [isClosed, setIsClosed] = useState(
    ticket.status === '마감' || participant === ticket.capacity
  )

  const isAuthor = ticket.user_id === loggedInUserId
  const isParticipant = ticket.participant_users.includes(loggedInUserId)
  useEffect(() => {
    if (participant === ticket.capacity || ticket.status === '마감') {
      setIsClosed(true)
    }
  }, [participant])
  const showModal = (
    content,
    title,
    okProps,
    okTxt = '확인',
    cancelTxt = '닫기'
  ) => {
    setModalContent(content)
    setModalTitle(title)
    setOkButtonProps(okProps)
    setOkText(okTxt)
    setCancelText(cancelTxt)
    setIsModalVisible(true)
  }

  const handleOk = () => {
    console.log('확인 클릭됨')
    setIsChecked(true)
    setParticipant(participant + 1)
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleClose = () => {
    setIsClosed(true)
    setIsModalVisible(false)
  }

  return (
    <Link
      className={styles.container}
      to={isUser && `/user/${ticket.ticket_id}`}
    >
      <div className={styles.main}>
        <div key={ticket.ticket_id} className={styles.ticket}>
          <div className={styles.top}>
            <div className={styles.left}>
              <div className={styles.topFirst}>
                <div className={`${styles.flag} ${styles.taxiFlag}`}>
                  {ticket.category}
                </div>
                <div className={styles.titleItem}>
                  <div className={styles.title}>{ticket.title}</div>
                </div>
              </div>
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
                {participant} / {ticket.capacity}
              </div>
              <div className={styles.status}>
                {isClosed ? (
                  '마감'
                ) : ticket.status === '마감' ? (
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
                  <span
                    onClick={() =>
                      showModal(
                        '인원 모집이 완료되지 않았습니다. 정말 마감하시겠습니까?',
                        '마감 확인',
                        {
                          style: { backgroundColor: 'red', borderColor: 'red' },
                          onClick: handleClose,
                        },
                        '마감',
                        '닫기'
                      )
                    }
                  >
                    마감하기
                  </span>
                ) : (
                  <img
                    src={isChecked ? check : checkGray}
                    className={styles.statusImage}
                    alt='Status'
                    onClick={() =>
                      !isChecked &&
                      showModal(
                        '확인 버튼을 누르면 참여가 확정됩니다.',
                        '참여 확인'
                      )
                    }
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
      <DraggableModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        title={modalTitle}
        content={modalContent}
        okButtonProps={okButtonProps}
        okText={okText}
        cancelText={cancelText}
      />
    </Link>
  )
}

function Gonggu({ isUser, ticket, loggedInUserId }) {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [modalContent, setModalContent] = useState('')
  const [modalTitle, setModalTitle] = useState('')
  const [okButtonProps, setOkButtonProps] = useState({})
  const [okText, setOkText] = useState('확인')
  const [cancelText, setCancelText] = useState('닫기')
  const [isChecked, setIsChecked] = useState(
    ticket.participant_users.includes(loggedInUserId)
  )
  const [participant, setParticipant] = useState(
    ticket.participant_users.length
  )
  const [isClosed, setIsClosed] = useState(
    ticket.status === '마감' || participant === ticket.capacity
  )

  const isAuthor = ticket.user_id === loggedInUserId
  const isParticipant = ticket.participant_users.includes(loggedInUserId)
  useEffect(() => {
    if (participant === ticket.capacity || ticket.status === '마감') {
      setIsClosed(true)
    }
  }, [participant])
  const showModal = (
    content,
    title,
    okProps,
    okTxt = '확인',
    cancelTxt = '닫기'
  ) => {
    setModalContent(content)
    setModalTitle(title)
    setOkButtonProps(okProps)
    setOkText(okTxt)
    setCancelText(cancelTxt)
    setIsModalVisible(true)
  }

  const handleOk = () => {
    console.log('확인 클릭됨')
    setIsChecked(true)
    setParticipant(participant + 1)
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleClose = () => {
    setIsClosed(true)
    setIsModalVisible(false)
  }

  return (
    <Link
      className={styles.container}
      to={isUser && `/user/${ticket.ticket_id}`}
    >
      <div className={styles.main}>
        <div key={ticket.ticket_id} className={styles.ticket}>
          <div className={styles.top}>
            <div className={styles.left}>
              <div className={styles.topFirst}>
                <div className={`${styles.flag} ${styles.gongguFlag}`}>
                  {ticket.category}
                </div>
                <div className={styles.titleItem}>
                  <div className={styles.title}>{ticket.title}</div>
                </div>
              </div>
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
                {participant} / {ticket.capacity}
              </div>
              <div className={styles.status}>
                {isClosed ? (
                  '마감'
                ) : ticket.status === '마감' ? (
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
                  <span
                    onClick={() =>
                      showModal(
                        '인원 모집이 완료되지 않았습니다. 정말 마감하시겠습니까?',
                        '마감 확인',
                        {
                          style: { backgroundColor: 'red', borderColor: 'red' },
                          onClick: handleClose,
                        },
                        '마감',
                        '닫기'
                      )
                    }
                  >
                    마감하기
                  </span>
                ) : (
                  <img
                    src={isChecked ? check : checkGray}
                    className={styles.statusImage}
                    alt='Status'
                    onClick={() =>
                      !isChecked &&
                      showModal(
                        '확인 버튼을 누르면 참여가 확정됩니다.',
                        '참여 확인'
                      )
                    }
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <DraggableModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        title={modalTitle}
        content={modalContent}
        okButtonProps={okButtonProps}
        okText={okText}
        cancelText={cancelText}
      />
    </Link>
  )
}
