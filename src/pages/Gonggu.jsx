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
  padding: 0px 16px 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  height: fit-content;
`

const GongguTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
`
