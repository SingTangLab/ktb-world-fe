import styled from 'styled-components'
import TripEntry from '../components/TripEntry'
import { TripListPage } from './TripList'
import { useLocation } from 'react-router-dom'

export function TripPage() {
  const location = useLocation()

  // URL에서 query parameter를 추출
  const queryParams = new URLSearchParams(location.search)
  const section = queryParams.get('section')

  return (
    <div>
      <TripContainer>
        <TripEntry />
        <TripListPage section={section} />
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
