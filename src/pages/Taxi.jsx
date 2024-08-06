import styled from 'styled-components'
import { SelectBar } from '../components/SelectBar'
import { ContentContainer } from './Laundry'
import Ticket from '../components/Ticket'

export function TaxiPage() {
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
  width: 100%;
  padding: 0px 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  gap: 10px;
  /* background-color: pink; */
`

const TaxiTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
