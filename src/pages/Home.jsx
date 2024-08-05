import styled from 'styled-components'

export function Home() {
  return (
    <HomeContainer>
      <HomeTitle>Home</HomeTitle>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  padding: 16px;
`

const HomeTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
