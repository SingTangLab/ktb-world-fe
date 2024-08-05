import styled from 'styled-components'
import Ticket from '../components/Ticket'

export function Taxi() {
  return (
    <TaxiContainer>
      <TaxiTitle>Taxi</TaxiTitle>
      <Ticket />
    </TaxiContainer>
  )
}

const TaxiContainer = styled.div`
  padding: 16px;
`

const TaxiTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
