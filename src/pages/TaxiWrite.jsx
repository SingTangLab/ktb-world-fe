import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { PlusOutlined, DownOutlined } from '@ant-design/icons'
import {
  Button,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  TimePicker,
  message,
} from 'antd'
import moment from 'moment'

const { TextArea } = Input
const SERVER_URL = 'http://localhost:8080/api'

export function TaxiWritePage() {
  const navigate = useNavigate()
  const format = 'HH:mm'
  const [form] = Form.useForm()
  const [value, setValue] = useState([])
  const [isLimited, setIsLimited] = useState(true)
  const [maxCount, setMaxCount] = useState(3)
  const [formData, setFormData] = useState({
    start_time: '',
    destination: '',
    title: '',
    description: '',
    is_limited: true,
    capacity: 3,
    participant_users: [],
    creator: 2,
    account: '',
    category: '택시',
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
        const start_time = values.time ? values.time.format('HH:mm:ss') : ''
        const currentDate = moment().format('YYYY-MM-DD')
        const updatedFormData = {
          ...formData,
          title: values.title,
          description: values.description,
          capacity: values.capacity || 0,
          account: values.account,
          destination: values.destination,
          start_time: `${currentDate}T${start_time}`,
          participant_users: values.participant_users || [],
          is_limited: isLimited,
        }

        fetch(`${SERVER_URL}/tickets`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedFormData),
        })
          .then((response) => {
            if (response.status === 201) {
              return response.json()
            }
            throw new Error('Failed to create ticket')
          })
          .then((data) => {
            message.success('티켓 생성 성공!')
            navigate('/taxi') // 제출 후 /taxi로 리다이렉트
          })
          .catch((error) => {
            message.error('티켓 생성 실패: ' + error.message)
          })
      })
      .catch((errorInfo) => {
        console.log('Validation Failed:', errorInfo)
      })
  }

  return (
    <FormContainer>
      <FormTitle>택시 티켓 생성</FormTitle>
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
          label='장소'
          name='destination'
          rules={[{ required: true, message: '장소를 입력해주세요.' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label='시간'
          name='time'
          rules={[{ required: true, message: '시간을 선택해주세요.' }]}
        >
          <TimePicker format={format} />
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
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 8px;
  }
`

const SwitchWithText = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 5px;

  .ant-form-item {
    margin-bottom: 0;
  }

  .ant-form-item-label {
    padding-bottom: 0;
  }
`

export default { TaxiWritePage }
