import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { DownOutlined } from '@ant-design/icons'
import { Button, Form, Input, InputNumber, Radio, Select } from 'antd'

const { TextArea } = Input

export function GongguWritePage() {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [value, setValue] = useState([])
  const [isLimited, setIsLimited] = useState(true)
  const [maxCount, setMaxCount] = useState(3)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    is_limited: true,
    capacity: 3,
    participant_users: [],
    creator: 3,
    account: '',
    category: '공구',
  })

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
    setFormData({ ...formData, is_limited: selectedValue === 'limited' })

    // 제한 있음/없음 변경 시 선택된 항목 초기화
    setValue([])
  }

  const handleMaxCountChange = (value) => {
    setMaxCount(value)
    setFormData({ ...formData, capacity: value })
  }

  const handleSelectChange = (selectedValues) => {
    setValue(selectedValues)
    setFormData({ ...formData, participant_users: selectedValues })
  }

  const handleSubmit = () => {
    form
      .validateFields()
      .then((values) => {
        const updatedFormData = {
          ...formData,
          title: values.title,
          description: values.description,
          capacity: values.capacity || 0,
          account: values.account,
          participant_users: values.participant_users || [],
        }
        console.log(updatedFormData)
        navigate('/gonggu') // 제출 후 /gonggu로 리다이렉트
      })
      .catch((errorInfo) => {
        console.log('Validation Failed:', errorInfo)
      })
  }

  return (
    <FormContainer>
      <FormTitle>공동구매 티켓 생성</FormTitle>
      <StyledForm form={form} layout='vertical' onFinish={handleSubmit}>
        <Form.Item
          label='제목'
          name='title'
          rules={[{ required: true, message: '제목을 입력해주세요.' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='내용'
          name='description'
          rules={[{ required: true, message: '내용을 입력해주세요.' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label='계좌'
          name='account'
          rules={[{ required: true, message: '계좌를 입력해주세요.' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='인원 제한'
          name='is_limited'
          rules={[
            { required: true, message: '인원 제한 여부를 선택해주세요.' },
          ]}
        >
          <Radio.Group onChange={handleRadioChange}>
            <Radio value='limited'> 제한 있음 </Radio>
            <Radio value='unlimited'> 제한 없음 </Radio>
          </Radio.Group>
        </Form.Item>
        {isLimited && (
          <Form.Item
            label='총 가능 인원'
            name='capacity'
            rules={[
              { required: true, message: '총 가능 인원을 입력해주세요.' },
            ]}
          >
            <InputNumber
              value={maxCount}
              onChange={handleMaxCountChange}
              min={1}
              max={10} // 최대 인원 수 설정
              placeholder='총 가능 인원수를 입력하세요'
              style={{ width: '100%' }}
            />
          </Form.Item>
        )}
        <Form.Item label='참여인원' name='participant_users'>
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
              { value: 1, label: 'Ava Swift' },
              { value: 2, label: 'Cole Reed' },
              { value: 3, label: 'Mia Blake' },
              { value: 4, label: 'Jake Stone' },
              { value: 5, label: 'Lily Lane' },
              { value: 6, label: 'Ryan Chase' },
              { value: 7, label: 'Zoe Fox' },
              { value: 8, label: 'Alex Grey' },
              { value: 9, label: 'Elle Blair' },
            ]}
          />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            제출
          </Button>
        </Form.Item>
      </StyledForm>
    </FormContainer>
  )
}

const FormContainer = styled.div`
  padding: 16px;
  width: 100%;
  max-width: 300px;
  margin: 20px auto;
  background-color: #fff;
  margin-top: 60px;
`

const FormTitle = styled.h2`
  /* margin-top: 60px; */
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 8px;
  }
`

export default GongguWritePage
