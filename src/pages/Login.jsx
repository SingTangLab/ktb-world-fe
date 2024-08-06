import { Button } from 'antd'
import styles from '../styles/Login.module.css'
import { useState } from 'react'

export function LoginPage() {
  const [nickname, setNickname] = useState('')
  const [password, setPassword] = useState('')

  const handleChangeNickname = (input) => {
    setNickname(input)
  }

  const handleChangePassword = (input) => {
    setPassword(input)
  }

  const handleClickSignup = () => {
    const data = { nickname, password }
    console.log(JSON.stringify(data))
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
          />
        </div>
        <div className={styles.password}>
          <p className={styles.inputTitle}>비밀번호</p>
          <input
            type='password'
            className={styles.inputContent}
            onChange={(e) => handleChangePassword(e.target.value)}
          />
        </div>
        <Button
          type='primary'
          onClick={handleClickSignup}
          className={styles.button}
        >
          로그인
        </Button>
      </div>
    </div>
  )
}
