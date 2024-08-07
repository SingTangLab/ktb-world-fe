import styled from 'styled-components'
import { SelectBar } from '../components/SelectBar'
import Ticket from '../components/Ticket'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

export function HomePage() {
  const [data, setData] = useState([])
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const filter = searchParams.get('filter') || '전체'

    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8080/api/tickets?category=전체&filter=${filter}`
      )

      const responseData = await response.json()
      setData(responseData?.tickets)
    }

    fetchData()
  }, [searchParams])

  return (
    <ContentContainer>
      <SelectBar />
      <HomeContainer>
        <Ticket datas={data} />
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
