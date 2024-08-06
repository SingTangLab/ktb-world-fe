import styled from 'styled-components'
import { SelectBar } from '../components/SelectBar'
import Ticket from '../components/Ticket'
import { useEffect, useState } from 'react'

export function HomePage() {
  const tickets = Array.from({ length: 10 }) // Creates an array with 10 undefined elements
  return (
    <ContentContainer>
      <SelectBar />
      <HomeContainer>
        <Ticket />
      </HomeContainer>
    </ContentContainer>
  )
}

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 125px;
`

const HomeContainer = styled.div`
  padding: 0px 16px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const HomeTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
