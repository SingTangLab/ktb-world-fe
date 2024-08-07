import styled from 'styled-components'
import { ContentContainer } from './Laundry'
import Ticket from '../components/Ticket'
import { useEffect, useState } from 'react'

export function UserPage() {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:8080/api/tickets/users?category=전체&filter=전체&user_id=${localStorage.getItem(
          'user_id'
        )}`
      )
      const responseData = await response.json()
      console.log(responseData)

      setData(responseData?.tickets)
    }

    fetchData()
  }, [])

  return (
    <ContentContainer>
      <UserContainer>
        <Ticket datas={data} />
      </UserContainer>
    </ContentContainer>
  )
}

const UserContainer = styled.div`
  padding: 16px;
  display: flex;
  width: 100%;
  padding: 0 16px;
  box-sizing: border-box;
  flex-direction: column;
  gap: 10px;
`
