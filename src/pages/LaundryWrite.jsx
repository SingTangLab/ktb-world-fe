import styled from 'styled-components'

export function LaundryWritePage() {
  return (
    <LaundryWriteContainer>
      <LaundryWriteTitle>세탁 글쓰기</LaundryWriteTitle>
    </LaundryWriteContainer>
  )
}

const LaundryWriteContainer = styled.div`
  padding: 16px;
`

const LaundryWriteTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`

export default LaundryWritePage
