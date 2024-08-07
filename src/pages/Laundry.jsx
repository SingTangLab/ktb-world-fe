import styled from 'styled-components'
import { SelectBar } from '../components/SelectBar'
import { useState, useEffect } from 'react'
import Ticket from '../components/Ticket'
import { useSearchParams } from 'react-router-dom'

export function LaundryPage() {
  const [data, setData] = useState([])
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const filter = searchParams.get('filter') || '전체'

    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8080/api/tickets?category=세탁&filter=${filter}`
      )

      const responseData = await response.json()
      console.log(responseData)
      setData(responseData?.tickets)
    }

    fetchData()
  }, [searchParams])

  return (
    <ContentContainer>
      <SelectBar />
      <LaundryContainer>
        <Ticket datas={data} />
      </LaundryContainer>
    </ContentContainer>
  )
}

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-top: 125px;
`

const LaundryContainer = styled.div`
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 10px;
`
