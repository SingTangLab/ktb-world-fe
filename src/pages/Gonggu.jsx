import styled from 'styled-components'
import Ticket from '../components/Ticket'

export function Gonggu() {
  return (
    <GongguContainer>
      <GongguTitle>Gonggu</GongguTitle>
      <Ticket />
    </GongguContainer>
  )
}

const GongguContainer = styled.div`
  padding: 16px;
`

const GongguTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
