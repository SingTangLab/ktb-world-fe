import { Button } from 'antd'
import styles from '../styles/Login.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SERVER_URL = 'http://localhost:8080/api'

export function LoginPage() {
  const navigate = useNavigate()
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeNickname = (input) => {
    setNickname(input)
  }

  const handleChangePassword = (input) => {
    setPassword(input)
  }

  const handleClickLogin = async () => {
    const form = { nickname, password }
    const response = await fetch(`${SERVER_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })

    if (response.ok) {
      const { data } = await response.json()
      console.log(data)
      localStorage.setItem('nickname', data.nickname)
      localStorage.setItem('user_id', data.id)
      navigate('/home')
    } else {
      alert('로그인 실패!')
    }
  }

  return (
    <div className={styles.main}>
      <div className={styles.title}>로그인</div>
      <div className={styles.container}>
        <div className={styles.nickname}>
          <p className={styles.inputTitle}>닉네임</p>
          <input
            className={styles.inputContent}
            type='text'
            onChange={(e) => handleChangeNickname(e.target.value)}
            value={nickname}
          />
        </div>
        <div className={styles.password}>
          <p className={styles.inputTitle}>비밀번호</p>
          <input
            type='password'
            className={styles.inputContent}
            onChange={(e) => handleChangePassword(e.target.value)}
            value={password}
          />
        </div>
        <Button
          type='primary'
          onClick={handleClickLogin}
          className={styles.button}
        >
          로그인
        </Button>
      </div>
    </div>
  )
}
