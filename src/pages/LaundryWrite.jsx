import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { DownOutlined } from '@ant-design/icons'
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
  message,
} from 'antd'
import moment from 'moment'

const { TextArea } = Input
const SERVER_URL = 'http://localhost:8080/api'

export function LaundryWritePage() {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [limitType, setLimitType] = useState('limited')
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    is_limited: true,
    capacity: 3,
    participant_users: [],
    creator: parseInt(localStorage.getItem('user_id'), 10) || 3,
    account: '',
    category: '세탁',
    laundry_color: [],
    is_dry: true,
    start_time: '',
    end_time: '',
  })
  const [value, setValue] = useState([])
  const [maxCount, setMaxCount] = useState(formData.capacity)
  const [userOptions, setUserOptions] = useState([])

  useEffect(() => {
    fetch(`${SERVER_URL}/users/all`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        throw new Error('Failed to load user list')
      })
      .then((data) => {
        if (Array.isArray(data)) {
          const options = data.map((user) => ({
            value: user.id,
            label: user.nickname,
          }))
          setUserOptions(options)
        } else {
          throw new Error('Invalid user data format')
        }
      })
      .catch((error) => {
        message.error('유저 목록을 불러오는 데 실패했습니다: ' + error.message)
      })
  }, [])

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
        const [start_time, end_time] = values.time
          .split(' ~ ')
          .map((time) => time.trim())
        const currentDate = moment().format('YYYY-MM-DD')
        const updatedFormData = {
          ...formData,
          title: values.title,
          description: values.description,
          capacity: limitType === 'limited' ? maxCount : 0,
          account: values.account,
          laundry_color: values.laundry_color.join(', '),
          is_dry: values.is_dry,
          start_time: moment(
            `${currentDate} ${start_time}`,
            'YYYY-MM-DD HH:mm'
          ).toISOString(),
          end_time: moment(
            `${currentDate} ${end_time}`,
            'YYYY-MM-DD HH:mm'
          ).toISOString(),
        }
        console.log('########', updatedFormData)
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
            console.log(data)
            navigate('/home') // 제출 후 /home 리다이렉트
          })
          .catch((error) => {
            message.error('티켓 생성 실패: ' + error.message)
            console.log('Validation Failed:', error)
          })
      })
      .catch((errorInfo) => {
        console.log('Validation Failed:', errorInfo)
      })
  }

  return (
    <LaundryWriteContainer>
      <LaundryWriteTitle>세탁 티켓 생성</LaundryWriteTitle>
      <StyledForm
        form={form}
        layout='vertical'
        style={{ maxWidth: 300, margin: '20px auto' }}
        initialValues={{ is_dry: true }}
        onFinish={handleSubmit}
      >
        <Label>
          <Form.Item
            label='제목'
            name='title'
            rules={[{ required: true, message: '제목을 입력해주세요.' }]}
          >
            <Input />
          </Form.Item>
        </Label>
        <Label>
          <Form.Item
            label='내용'
            name='description'
            rules={[{ required: true, message: '내용을 입력해주세요.' }]}
          >
            <TextArea rows={4} />
          </Form.Item>
        </Label>
        <Label>
          <Form.Item
            label='계좌'
            name='account'
            rules={[{ required: true, message: '계좌를 입력해주세요.' }]}
          >
            <Input />
          </Form.Item>
        </Label>
        <Label>
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
        </Label>
        <Label>
          <Text>건조기 사용 유무</Text>
          <Form.Item name='is_dry' valuePropName='checked'>
            <Switch />
          </Form.Item>
        </Label>
        <Label>
          <Text>인원 모집</Text>
          <Form.Item>
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
                        max={10}
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
        </Label>
        <Label>
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
              options={userOptions}
            />
          </Form.Item>
        </Label>
        <Label>
          <Form.Item
            label='시간'
            name='time'
            rules={[{ required: true, message: '시간을 선택해주세요.' }]}
          >
            <Select placeholder='시간을 선택해주세요.' style={{ width: 300 }}>
              <Select.Option value='06:00 ~ 06:40'>06:00 ~ 06:40</Select.Option>
              <Select.Option value='06:40 ~ 07:20'>06:40 ~ 07:20</Select.Option>
              <Select.Option value='07:20 ~ 08:00'>07:20 ~ 08:00</Select.Option>
              <Select.Option value='19:00 ~ 19:40'>19:00 ~ 19:40</Select.Option>
              <Select.Option value='19:40 ~ 20:20'>19:40 ~ 20:20</Select.Option>
              <Select.Option value='20:20 ~ 21:00'>20:20 ~ 21:00</Select.Option>
              <Select.Option value='21:00 ~ 21:40'>21:00 ~ 21:40</Select.Option>
              <Select.Option value='21:40 ~ 22:20'>21:40 ~ 22:20</Select.Option>
              <Select.Option value='22:20 ~ 23:00'>22:20 ~ 23:00</Select.Option>
              <Select.Option value='23:00 ~ 23:40'>23:00 ~ 23:40</Select.Option>
              <Select.Option value='23:40 ~ 24:00'>23:40 ~ 00:00</Select.Option>
              <Select.Option value='24:00 ~ 24:40'>00:00 ~ 00:40</Select.Option>
              <Select.Option value='24:40 ~ 25:20'>00:40 ~ 01:20</Select.Option>
            </Select>
          </Form.Item>
        </Label>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            제출
          </Button>
        </Form.Item>
      </StyledForm>
    </LaundryWriteContainer>
  )
}

const LaundryWriteContainer = styled.div`
  padding: 16px;
`

const LaundryWriteTitle = styled.h2`
  margin-top: 60px;
  font-size: 20px;
  font-weight: 600;
  text-align: center;
`

const Label = styled.div`
  margin-bottom: 8px;
  .ant-form-item {
    margin-bottom: 0;
  }
  .ant-form-item-label {
    padding-bottom: 0;
  }
`

const StyledForm = styled(Form)`
  .ant-form-item {
    margin-bottom: 8px;
  }
`

const Text = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-top: 20px;
  margin-bottom: 5px;
`

export default LaundryWritePage
