import styled from 'styled-components'
import { ContentContainer } from './Laundry'
import { SelectBar } from '../components/SelectBar'
import Ticket from '../components/Ticket'
import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export function GongguPage() {
  const [data, setData] = useState([])
  const [searchParams] = useSearchParams()

  useEffect(() => {
    const filter = searchParams.get('filter') || '전체'

    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8080/api/tickets?category=공구&filter=${filter}`
      )

      const responseData = await response.json()
      setData(responseData?.tickets)
    }

    fetchData()
  }, [searchParams])

  return (
    <ContentContainer>
      <SelectBar title='공동구매' />
      <GongguContainer>
        {/* <GongguTitle>공동구매</GongguTitle> */}
        <Ticket datas={data} />
      </GongguContainer>
    </ContentContainer>
  )
}

const GongguContainer = styled.div`
  width: 100%;
  padding: 0px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: fit-content;
`

const GongguTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
