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
  Switch,
  Row,
  Col,
  TimePicker,
} from 'antd'
import moment from 'moment'

const { TextArea } = Input

export function LaundryWritePage() {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [limitType, setLimitType] = useState('limited') // 기본 값 설정 ('limited' 또는 'unlimited')
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    is_limited: true,
    capacity: 3, // 기본 최대 인원 수를 3으로 설정
    participant_users: [3, 6],
    creator: 3,
    account: '',
    category: '세탁',
    laundry_color: [],
    is_dry: true,
    start_time: '',
    end_time: '',
  })

  const [value, setValue] = useState([])
  const [maxCount, setMaxCount] = useState(formData.capacity)

  const suffix = (
    <>
      <span>
        {value.length} / {limitType === 'limited' ? maxCount : '제한 없음'}
      </span>
      <DownOutlined />
    </>
  )

  const handleLimitChange = (e) => {
    const selectedValue = e.target.value
    setLimitType(selectedValue)
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
        const [start_time, end_time] = values.time.split(' ~ ')
        const currentDate = moment().format('YYYY-MM-DD')
        const updatedFormData = {
          ...formData,
          title: values.title,
          description: values.description,
          capacity: values.capacity || 0,
          account: values.account,
          laundry_color: values.laundry_color,
          is_dry: values.is_dry,
          start_time: `${currentDate} ${start_time}:00`,
          end_time: `${currentDate} ${end_time}:00`,
        }
        console.log(updatedFormData)
        navigate('/taxi') // 제출 후 /taxi로 리다이렉트
      })
      .catch((errorInfo) => {
        console.log('Validation Failed:', errorInfo)
      })
  }

  return (
    <FormContainer>
      <FormTitle>세탁 티켓 생성</FormTitle>
      <StyledForm
        form={form}
        layout='vertical'
        initialValues={{ is_dry: true }}
        onFinish={handleSubmit}
      >
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
          label='빨래 색상'
          name='laundry_color'
          rules={[{ required: true, message: '빨래 색상을 선택해주세요.' }]}
        >
          <Select
            mode='multiple'
            style={{ width: '100%' }}
            placeholder='빨래 색상을 선택해주세요.'
            onChange={(value) =>
              setFormData({ ...formData, laundry_color: value })
            }
            tokenSeparators={[',']}
            options={[
              { value: '어두운 계열', label: '어두운 계열' },
              { value: '흰색 계열', label: '흰색 계열' },
              { value: '청색 계열', label: '청색 계열' },
              { value: '상관 없음', label: '상관 없음' },
            ]}
          />
        </Form.Item>
        <Form.Item name='is_dry' valuePropName='checked'>
          <SwitchWithText>건조기 사용 유무</SwitchWithText>
        </Form.Item>
        <Form.Item label='인원 모집'>
          <Radio.Group onChange={handleLimitChange} value={limitType}>
            <Row>
              <Col span={24}>
                <Radio value='limited'> 제한 있음 </Radio>
              </Col>
              {limitType === 'limited' && (
                <Col span={24} style={{ marginTop: 8 }}>
                  <Form.Item>
                    <InputNumber
                      value={maxCount}
                      onChange={handleMaxCountChange}
                      min={1}
                      max={10} // 최대 인원 수 설정
                      placeholder='총 가능 인원수를 입력하세요'
                      style={{ width: '100%' }}
                    />
                  </Form.Item>
                </Col>
              )}
              <Col span={24}>
                <Radio value='unlimited'> 제한 없음 </Radio>
              </Col>
            </Row>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='참여인원'>
          <Select
            mode='multiple'
            maxCount={limitType === 'limited' ? maxCount : undefined}
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
        <Form.Item
          label='시간'
          name='time'
          rules={[{ required: true, message: '시간을 선택해주세요.' }]}
        >
          <Select placeholder='시간을 선택해주세요.' style={{ width: 300 }}>
            <Select.Option value='6:00 ~ 6:40'>6:00 ~ 6:40</Select.Option>
            <Select.Option value='6:40 ~ 7:20'>6:40 ~ 7:20</Select.Option>
            <Select.Option value='7:20 ~ 8:00'>7:20 ~ 8:00</Select.Option>
            <Select.Option value='19:00 ~ 19:40'>19:00 ~ 19:40</Select.Option>
            <Select.Option value='19:40 ~ 20:20'>19:40 ~ 20:20</Select.Option>
            <Select.Option value='20:20 ~ 21:00'>20:20 ~ 21:00</Select.Option>
            <Select.Option value='21:00 ~ 21:40'>21:00 ~ 21:40</Select.Option>
            <Select.Option value='21:40 ~ 22:20'>21:40 ~ 22:20</Select.Option>
            <Select.Option value='22:20 ~ 23:00'>22:20 ~ 23:00</Select.Option>
            <Select.Option value='23:00 ~ 23:40'>23:00 ~ 23:40</Select.Option>
            <Select.Option value='23:40 ~ 24:00'>23:40 ~ 24:20</Select.Option>
            <Select.Option value='24:00 ~ 24:40'>24:20 ~ 01:00</Select.Option>
            <Select.Option value='24:40 ~ 25:20'>01:00 ~ 01:40</Select.Option>
          </Select>
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

export function TaxiWritePage() {
  const navigate = useNavigate()
  const format = 'HH:mm'
  const [form] = Form.useForm()
  const [value, setValue] = useState([]) // 초기값을 빈 배열로 설정하여 숫자 배열을 받을 수 있도록 변경
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
    creator: 3,
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

    // 제한 있음/없음 변경 시 선택된 항목 초기화
    setValue([])
  }

  const handleMaxCountChange = (e) => {
    setMaxCount(e.target.value)
    setFormData({ ...formData, capacity: e.target.value })
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
          destination: values.place,
          start_time: `${currentDate} ${start_time}`,
          participant_users: values.participant_users || [],
        }
        console.log(updatedFormData)
        navigate('/taxi') // 제출 후 /taxi로 리다이렉트
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
          label='시간'
          name='time'
          rules={[{ required: true, message: '시간을 선택해주세요.' }]}
        >
          <TimePicker format={format} />
        </Form.Item>
        <Form.Item
          label='장소'
          name='place'
          rules={[{ required: true, message: '장소를 입력해주세요.' }]}
        >
          <Input />
        </Form.Item>
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
            <Input
              value={maxCount}
              onChange={handleMaxCountChange}
              type='number'
              placeholder='총 가능 인원수를 입력하세요'
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
  max-width: 360px;
  margin: 20px auto;
  background-color: #fff;
  margin-top: 55px;
`

const FormTitle = styled.h2`
  font-size: 24px;
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

export default { LaundryWritePage, TaxiWritePage }
