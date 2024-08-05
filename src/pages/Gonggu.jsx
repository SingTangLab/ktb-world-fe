import styled from 'styled-components'
import { ContentContainer } from './Laundry'
import { SelectBar } from '../components/SelectBar'
import Ticket from '../components/Ticket'

export function Gonggu() {
  return (
    <ContentContainer>
      <SelectBar />
      <GongguContainer>
        <GongguTitle>Gonggu</GongguTitle>
        <Ticket />
      </GongguContainer>
    </ContentContainer>
  )
}

const GongguContainer = styled.div`
  padding: 16px;
`

const GongguTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
