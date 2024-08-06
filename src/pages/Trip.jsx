import styled from 'styled-components'
import { ContentContainer } from './Laundry'
import TripEntry from '../components/TripEntry'

export function TripPage() {
  return (
    <div>
      <TripContainer>
        <TripTitle>Trip</TripTitle>
        <TripEntry />
      </TripContainer>
    </div>
  )
}

const TripContainer = styled.div`
  height: fit-content;
  padding: 16px;
`

const TripTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
