import styled from 'styled-components'

export function Taxi() {
  return (
    <TaxiContainer>
      <TaxiTitle>Taxi</TaxiTitle>
    </TaxiContainer>
  )
}

const TaxiContainer = styled.div`
  padding: 16px;
`

const TaxiTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
