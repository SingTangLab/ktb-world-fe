import styled from 'styled-components'

export function TaxiWritePage() {
  return (
    <TaxiWriteContainer>
      <TaxiWriteTitle>택시 글쓰기</TaxiWriteTitle>
    </TaxiWriteContainer>
  )
}

const TaxiWriteContainer = styled.div`
  padding: 16px;
`

const TaxiWriteTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
