import styled from 'styled-components'
import { ContentContainer } from './Laundry'
import { SelectBar } from '../components/SelectBar'

export function TicketPage() {
  return (
    <ContentContainer>
      <SelectBar />
      <TicketContainer>
        <TicketTitle>Ticket</TicketTitle>
      </TicketContainer>
    </ContentContainer>
  )
}

const TicketContainer = styled.div`
  padding: 16px;
`

const TicketTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
