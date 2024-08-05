import styled from 'styled-components'

export function Trip() {
  return (
    <TripContainer>
      <TripTitle>Trip</TripTitle>
    </TripContainer>
  )
}

const TripContainer = styled.div`
  padding: 16px;
`

const TripTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
