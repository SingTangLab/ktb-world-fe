import styled from 'styled-components'
import { ContentContainer } from './Laundry'
import ticketTop from '../images/ticketTop.png'
import TicketIcon from '../images/TicketIcon'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function TicketPage() {
  const navigate = useNavigate()
  const titleList = ['제목', '내용', '참여', '계좌', '티켓 발급 날짜']
  const { id } = useParams()
  const [data, setData] = useState('')
  console.log(id)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/api/tickets/${id}`)
      const responseData = await response.json()
      console.log(responseData)
      setData(responseData.data)
    }

    fetchData()
  }, [id])

  const handleClose = () => {
    navigate('/user')
  }

  return (
    <DetailContainer>
      <Container>
        <TicketContainer>
          <TicketImg src={ticketTop} alt='user' />
          <WhiteBox />
          <TicketBox>
            <TicketContents>
              <TicketContent>
                <ContentTitle>제목</ContentTitle>
                <ContentContent>{data.title}</ContentContent>
              </TicketContent>
              <TicketContent>
                <ContentTitle>내용</ContentTitle>
                <ContentContent>{data.description}</ContentContent>
              </TicketContent>
              <TicketContent>
                <ContentTitle>참여</ContentTitle>
                <ContentContent>
                  {data.participant_user?.join(', ')}
                </ContentContent>
              </TicketContent>
              <TicketContent>
                <ContentTitle>계좌</ContentTitle>
                <ContentContent>{data.account}</ContentContent>
              </TicketContent>
              <TicketDate>
                <ContentDateTitle>{titleList[4]}</ContentDateTitle>
                <ContentDateContent>
                  <TextAlign>{data.created_at}</TextAlign>
                </ContentDateContent>
              </TicketDate>

              <BtnArea>
                <Btn onClick={handleClose}>닫기</Btn>
              </BtnArea>
            </TicketContents>
          </TicketBox>
          <TicketTopContainer>
            <TicketIconBox>
              <TicketIcon />
            </TicketIconBox>
            <TicketText>
              <TicketType>{data.type}</TicketType>
              <TicketSub>{data.state}</TicketSub>
            </TicketText>
          </TicketTopContainer>
        </TicketContainer>
      </Container>
    </DetailContainer>
  )
}

const DetailContainer = styled(ContentContainer)`
  margin-top: 55px;
`

const Container = styled.div`
  padding: 16px;
`

const WhiteBox = styled.div`
  position: absolute;
  top: 105px;
  background-color: #fff;
  z-index: 2;
  width: 298px;
  height: 20px;
`

const TicketContainer = styled.div`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 325px;
  box-sizing: border-box;
  /* box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3); */
`

const TicketImg = styled.img`
  width: 100%;
  height: auto;
`

const TicketBox = styled.div`
  margin-top: -15px;
  background-color: #fff;
  height: 100%;
  width: 301px;
  box-sizing: border-box;
  padding: 20px 0;
  box-shadow: 0px 4px 10px 0px rgba(83, 83, 83, 0.3);
  /* background-color: pink; */
`

const TicketTopContainer = styled.div`
  width: 100px;
  height: 139px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
`

const TicketIconBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0px 4px 10px 0px rgba(83, 83, 83, 0.3);
`

const TicketText = styled.div`
  height: 56px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const TicketType = styled.div`
  font-size: 24px;
  font-weight: 700;
`

const ContentTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  width: 55px;
  box-sizing: border-box;
`

const ContentContent = styled.div`
  font-size: 13px;
  font-weight: 600;
  width: 279px;
  color: #747483;
  display: flex;
  line-height: 18px;
`

const TicketContents = styled.div`
  padding: 10px 0 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

const TicketContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  gap: 10px;
  padding: 20px;
  box-sizing: border-box;
  background-color: white;
  border-bottom: 1px dashed #b8b8c1;
  z-index: 10px;
`

const TicketTitle = styled.div`
  font-size: 20px;
  font-weight: 600;
`

const TicketSub = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #747483;
`

const TicketDate = styled(TicketContent)`
  border-bottom: none;
  box-sizing: border-box;
  display: flex;
`

const ContentDateTitle = styled(ContentTitle)`
  width: 130px;
`

const ContentDateContent = styled(ContentContent)`
  width: 200px;
  display: flex;
  justify-content: flex-end;
`

const TextAlign = styled.div``

const BtnArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Btn = styled.div`
  width: 90%;
  height: 50px;
  padding: 0 10px;
  box-sizing: border-box;
  background-color: #d9e8ff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 600;
  color: #3578ff;
  cursor: pointer;
  border-radius: 30px;
  &:hover {
    background-color: #3578ff;
    color: #fff;
  }
`

export default TicketPage
