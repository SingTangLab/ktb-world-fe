import styled from 'styled-components'
import { ContentContainer } from './Laundry'
import { SelectBar } from '../components/SelectBar'
import Ticket from '../components/Ticket'
import { SelectState } from '../components/SelectState'

export function GongguPage() {
  return (
    <ContentContainer>
      <SelectBar title='공동구매' />
      <GongguContainer>
        {/* <GongguTitle>공동구매</GongguTitle> */}
        <Ticket />
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
