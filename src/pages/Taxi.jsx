import styled from 'styled-components'
import { SelectBar } from '../components/SelectBar'
import { ContentContainer } from './Laundry'

export function Taxi() {
  return (
    <ContentContainer>
      <SelectBar />
      <TaxiContainer>
        <TaxiTitle>Taxi</TaxiTitle>
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
