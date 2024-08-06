import React, { useState } from 'react'
import styled from 'styled-components'
import { Form, Input, TimePicker, Radio, Select } from 'antd'
import dayjs from 'dayjs'
import { DownOutlined } from '@ant-design/icons'

export function TaxiWritePage() {
  const format = 'HH:mm'
  const [value, setValue] = useState([]) // 초기값을 빈 배열로 설정하여 숫자 배열을 받을 수 있도록 변경
  const [isLimited, setIsLimited] = useState(true)
  const [maxCount, setMaxCount] = useState(3)

  const suffix = (
    <>
      <span>
        {value.length} / {isLimited ? maxCount : '제한 없음'}
      </span>
      <DownOutlined />
    </>
  )

  const handleRadioChange = (e) => {
    const selectedValue = e.target.value
    setIsLimited(selectedValue === 'limited')

    // 제한 있음/없음 변경 시 선택된 항목 초기화
    setValue([])
  }

  const handleMaxCountChange = (e) => {
    setMaxCount(e.target.value)
  }

  const handleSelectChange = (selectedValues) => {
    setValue(selectedValues) // 선택된 값이 배열로 들어옴
  }

  return (
    <TaxiWriteContainer>
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout='horizontal'
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item label='시간'>
          <TimePicker defaultValue={dayjs('12:08', format)} format={format} />
        </Form.Item>
        <Form.Item label='장소'>
          <Input />
        </Form.Item>
        <Form.Item label='제목'>
          <Input />
        </Form.Item>
        <Form.Item label='내용'>
          <Input />
        </Form.Item>
        <Form.Item label='인원 제한'>
          <Radio.Group
            onChange={handleRadioChange}
            value={isLimited ? 'limited' : 'unlimited'}
          >
            <Radio value='limited'> 제한 있음 </Radio>
            <Radio value='unlimited'> 제한 없음 </Radio>
          </Radio.Group>
        </Form.Item>
        {isLimited && (
          <Form.Item label='총 가능 인원'>
            <Input
              value={maxCount}
              onChange={handleMaxCountChange}
              type='number'
              placeholder='총 가능 인원수를 입력하세요'
            />
          </Form.Item>
        )}
        <Form.Item label='참여인원'>
          <Select
            mode='multiple'
            maxCount={isLimited ? maxCount : undefined}
            value={value}
            style={{
              width: '100%',
            }}
            onChange={handleSelectChange}
            suffixIcon={suffix}
            placeholder='Please select'
            options={[
              {
                value: 1,
                label: 'Ava Swift',
              },
              {
                value: 2,
                label: 'Cole Reed',
              },
              {
                value: 3,
                label: 'Mia Blake',
              },
              {
                value: 4,
                label: 'Jake Stone',
              },
              {
                value: 5,
                label: 'Lily Lane',
              },
              {
                value: 6,
                label: 'Ryan Chase',
              },
              {
                value: 7,
                label: 'Zoe Fox',
              },
              {
                value: 8,
                label: 'Alex Grey',
              },
              {
                value: 9,
                label: 'Elle Blair',
              },
            ]}
          />
        </Form.Item>
      </Form>
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

export default TaxiWritePage
