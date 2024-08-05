import styled from 'styled-components'
import { Category } from './Category'

export function Header() {
  const nickname = 'seny.park'

  return (
    <>
      <HeaderContainer>
        <Title>KTB WORLD</Title>
        <Profile>
          <Circle>{nickname[0]}</Circle>
          <NickName>{nickname}</NickName>
        </Profile>
      </HeaderContainer>
      <Category />
    </>
  )
}

const HeaderContainer = styled.header`
  height: 55px;
  padding: 18px 16px;
  box-sizing: border-box;
  font-weight: 600;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
`

const Title = styled.h1``
const Profile = styled.div`
  display: flex;
  align-items: center;
`

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #6d7992;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  color: #fff;
`

const NickName = styled.div`
  margin-left: 8px;
  font-size: 12px;
  font-weight: 500;
`
