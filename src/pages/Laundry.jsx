import styled from 'styled-components'
import { SelectBar } from '../components/SelectBar'
import Ticket from '../components/Ticket'

export function LaundryPage() {
  const tickets = Array.from({ length: 10 }) // Creates an array with 10 undefined elements

  return (
    <ContentContainer>
      <SelectBar />
      <LaundryContainer>
        {tickets.map((_, index) => (
          <Ticket key={index} />
        ))}
      </LaundryContainer>
    </ContentContainer>
  )
}

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-top: 55px;
`

const LaundryContainer = styled.div`
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 10px;
`
