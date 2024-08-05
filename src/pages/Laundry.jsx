import styled from 'styled-components'

export function Laundry() {
  return (
    <LaundryContainer>
      <LaundryTitle>Laundry</LaundryTitle>
    </LaundryContainer>
  )
}

const LaundryContainer = styled.div`
  padding: 16px;
`

const LaundryTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
