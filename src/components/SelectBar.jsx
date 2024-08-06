import styled from 'styled-components'
import { SelectState } from './SelectState'

export function SelectBar({ title }) {
  return (
    <Container>
      {/* <Title>{title}</Title> */}
      <SelectState />
    </Container>
  )
}

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
`

const Container = styled.div`
  width: 360px;
  /* margin-top: 5px; */
  padding: 0 25px;
  box-sizing: border-box;
  display: flex;
  /* justify-content: space-between; */
  justify-content: flex-end;
  align-items: center;
`
