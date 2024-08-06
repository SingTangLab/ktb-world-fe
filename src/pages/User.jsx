import styled from 'styled-components'
import { ContentContainer } from './Laundry'
import { SelectBar } from '../components/SelectBar'
import Ticket from '../components/Ticket'

export function UserPage() {
  const tickets = Array.from({ length: 10 })
  return (
    <ContentContainer>
      <SelectBar />
      <UserContainer>
        {tickets.map((_, index) => (
          <Ticket key={index} />
        ))}
      </UserContainer>
    </ContentContainer>
  )
}

const UserContainer = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`
