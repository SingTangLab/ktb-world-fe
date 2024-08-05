import styled from 'styled-components'
import { ContentContainer } from './Laundry'
import { SelectBar } from '../components/SelectBar'

export function User() {
  return (
    <ContentContainer>
      <UserContainer>
        <UserTitle>User</UserTitle>
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
