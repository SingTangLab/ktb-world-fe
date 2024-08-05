import styled from 'styled-components'
import { SelectBar } from '../components/SelectBar'

export function Laundry() {
  return (
    <ContentContainer>
      <SelectBar />
      <LaundryContainer>
        <LaundryTitle>Laundry</LaundryTitle>
      </LaundryContainer>
    </ContentContainer>
  )
}

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LaundryContainer = styled.div`
  padding: 16px;
`

const LaundryTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
