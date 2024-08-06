import React from 'react'
import styled from 'styled-components'
import { Select, Space } from 'antd'
import { useNavigate, useSearchParams } from 'react-router-dom'

const stateData = [
  {
    value: '전체',
    label: '전체',
  },
  {
    value: '모집중',
    label: '모집중',
  },
  {
    value: '마감',
    label: '마감',
  },
]

export function SelectState() {
  const [searchParams, setSearchParams] = useSearchParams()

  const handleChange = (value) => {
    searchParams.set('filter', value)
    setSearchParams(searchParams)
  }

  return (
    <Space wrap>
      <Select
        defaultValue={stateData[0].value}
        style={{ width: 100 }}
        onChange={handleChange}
        options={stateData}
      />
    </Space>
  )
}
