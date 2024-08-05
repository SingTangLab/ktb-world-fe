import styled from 'styled-components'
import { SelectState } from './SelectState'

export function SelectBar() {
  return (
    <Container>
      <SelectState />
    </Container>
  )
}

const Container = styled.div`
  width: 360px;
  padding: 0 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
