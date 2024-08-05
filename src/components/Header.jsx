import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Category } from './Category'

export function Header() {
  const nickname = 'seny.park'

  return (
    <Container>
      <HeaderContainer>
        <Title to='/'>KTB WORLD</Title>
        <Profile to='/user'>
          <Circle>{nickname[0]}</Circle>
          <NickName>{nickname}</NickName>
        </Profile>
      </HeaderContainer>
      <Category />
    </Container>
  )
}

const Container = styled.div`
  /* width: 360px; */
  margin: 0 auto;
`

const HeaderContainer = styled.header`
  height: 55px;
  width: 100%;
  padding: 18px 16px;
  box-sizing: border-box;
  font-weight: 600;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
`

const Title = styled(Link)`
  text-decoration: none;
  color: inherit;
`
const Profile = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
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
