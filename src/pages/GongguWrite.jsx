// GongguWritePage.js
import styled from 'styled-components'

export function GongguWritePage() {
  return (
    <GongguWriteContainer>
      <GongguWriteTitle>공동구매 글쓰기</GongguWriteTitle>
    </GongguWriteContainer>
  )
}

const GongguWriteContainer = styled.div`
  padding: 16px;
`

const GongguWriteTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
