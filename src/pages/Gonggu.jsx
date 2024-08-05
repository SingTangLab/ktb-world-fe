import styled from 'styled-components'

export function Gonggu() {
  return (
    <GongguContainer>
      <GongguTitle>Gonggu</GongguTitle>
    </GongguContainer>
  )
}

const GongguContainer = styled.div`
  padding: 16px;
`

const GongguTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
