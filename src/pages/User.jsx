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
        <Ticket />
      </UserContainer>
    </ContentContainer>
  )
}

const UserContainer = styled.div`
  padding: 16px;
  display: flex;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  flex-direction: column;
  gap: 10px;
`
