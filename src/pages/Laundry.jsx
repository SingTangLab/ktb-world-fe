import styled from 'styled-components'
import Ticket from '../components/Ticket'

export function Laundry() {
  const tickets = Array.from({ length: 10 }) // Creates an array with 10 undefined elements

  return (
    <LaundryContainer>
      <LaundryTitle>Laundry</LaundryTitle>
      {tickets.map((_, index) => (
        <Ticket key={index} />
      ))}
    </LaundryContainer>
  )
}

const LaundryContainer = styled.div`
  padding: 16px;
`

const LaundryTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
