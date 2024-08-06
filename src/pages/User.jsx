import styled from 'styled-components'
import { ContentContainer } from './Laundry'
import { SelectBar } from '../components/SelectBar'
import TicketBorder from '../components/TicketBorder'

export function UserPage() {
  return (
    <ContentContainer>
      <UserContainer>
        <UserTitle>User</UserTitle>
        <TicketBorder />
      </UserContainer>
    </ContentContainer>
  )
}

const UserContainer = styled.div`
  padding: 16px;
`

const UserTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
