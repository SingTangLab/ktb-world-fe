import styled from 'styled-components'
import { SelectBar } from '../components/SelectBar'
import Ticket from '../components/Ticket'

export function HomePage() {
  const tickets = Array.from({ length: 10 }) // Creates an array with 10 undefined elements
  return (
    <ContentContainer>
      <SelectBar />
      <HomeContainer>
        {tickets.map((_, index) => (
          <Ticket key={index} />
        ))}
      </HomeContainer>
    </ContentContainer>
  )
}

export const ContentContainer = styled.div`
  justifu-content: flex-start;
  align-items: center;
  height: 100%;
`

const HomeContainer = styled.div`
  padding: 0px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const HomeTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
