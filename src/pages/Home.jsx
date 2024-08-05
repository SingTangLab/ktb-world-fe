import styled from 'styled-components'
import { ContentContainer } from './Laundry'
import { SelectBar } from '../components/SelectBar'

export function Home() {
  return (
    <ContentContainer>
      <SelectBar />
      <HomeContainer>
        <HomeTitle>Home</HomeTitle>
      </HomeContainer>
    </ContentContainer>
  )
}

const HomeContainer = styled.div`
  padding: 16px;
`

const HomeTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
