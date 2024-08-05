import styled from 'styled-components'
import { ContentContainer } from './Laundry'

export function Trip() {
  return (
    <ContentContainer>
      <TripContainer>
        <TripTitle>Trip</TripTitle>
      </TripContainer>
    </ContentContainer>
  )
}

const TripContainer = styled.div`
  padding: 16px;
`

const TripTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
