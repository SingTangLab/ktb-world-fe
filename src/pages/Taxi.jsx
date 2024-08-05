import styled from 'styled-components'
import { SelectBar } from '../components/SelectBar'
import { ContentContainer } from './Laundry'
import Ticket from '../components/Ticket'

export function Taxi() {
  return (
    <ContentContainer>
      <SelectBar />
      <TaxiContainer>
        <TaxiTitle>Taxi</TaxiTitle>
        <Ticket />
      </TaxiContainer>
    </ContentContainer>
  )
}

const TaxiContainer = styled.div`
  padding: 16px;
`

const TaxiTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
