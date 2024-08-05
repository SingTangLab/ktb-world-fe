import styled from 'styled-components'
import { Select, Space } from 'antd'

const stateData = [
  {
    value: 'all',
    label: '전체',
  },
  {
    value: 'start',
    label: '모집중',
  },
  {
    value: 'end',
    label: '마감',
  },
]

const handleChange = (value) => {
  console.log(`selected ${value}`)
}

export function SelectState() {
  return (
    <Space wrap>
      <Select
        defaultValue={stateData[0].value}
        style={{ width: 80 }}
        onChange={handleChange}
        options={stateData}
      />
    </Space>
  )
}
