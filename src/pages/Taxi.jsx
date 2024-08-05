import styled from 'styled-components'
import { SelectBar } from '../components/SelectBar'
import { ContentContainer } from './Laundry'
import Ticket from '../components/Ticket'

export function Taxi() {
  return (
    <ContentContainer>
      <SelectBar />
      <TaxiContainer>
        <Ticket />
      </TaxiContainer>
    </ContentContainer>
  )
}

const TaxiContainer = styled.div`
  padding: 0px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const TaxiTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
