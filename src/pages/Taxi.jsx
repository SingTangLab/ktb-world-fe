import styled from 'styled-components'
import { SelectBar } from '../components/SelectBar'
import { ContentContainer } from './Laundry'
import Ticket from '../components/Ticket'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export function TaxiPage() {
  const [filter, setFilter] = useState('전체')
  const [data, setData] = useState([])
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const filter = searchParams.get('filter') || '전체'

    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8080/api/tickets?category=택시&filter=${filter}`
      )

      const responseData = await response.json()
      console.log(responseData)
      setData(responseData.tickets)
    }

    fetchData()
  }, [searchParams])

  return (
    <ContentContainer>
      <SelectBar />
      <TaxiContainer>
        <Ticket datas={data} />
      </TaxiContainer>
    </ContentContainer>
  )
}

const TaxiContainer = styled.div`
  width: 100%;
  padding: 0px 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: fit-content;
  gap: 10px;
  /* background-color: pink; */
`

const TaxiTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
