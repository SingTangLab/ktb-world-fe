import styled from 'styled-components'

export function MyTicket() {
  return (
    <MyTicketContainer>
      <MyTicketTitle>MyTicket</MyTicketTitle>
    </MyTicketContainer>
  )
}

const MyTicketContainer = styled.div`
  padding: 16px;
`

const MyTicketTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
