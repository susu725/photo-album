'use client';

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Footer from './_components/Footer/Footer'
import styles from './page.module.scss'
import { getUsersApi } from './api/api'

export default function Login() {
  const [users, setUsers] = useState(null)
  const [userId, setUserId] = useState(null)
  const router = useRouter()

  const handleInput = e => {
    setUserId(e.target.value)
  }

  const handleLogin = () => {
    users.map(user => {
      if (user.id === Number(userId)) {
        localStorage.setItem('userInfo', JSON.stringify(user))
        router.push('/home')
      }
    })
  }

  // 取得所有使用者資料
  const getUsers = async () => {
    try {
      const users = await getUsersApi()
      setUsers(users)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className={styles.login}>
      <div />
      <div className={styles.container}>
        <input type='text' placeholder='User ID' onChange={handleInput} />
        <button className={styles.loginBtn} onClick={handleLogin}>
          <p>Log in</p>
        </button>
        <p className={styles.noAccount}>Don’t have an account?</p>
        <div className={styles.registerWay}>
          <button><p>Register</p></button>
          <button><p>Continue with Google</p></button>
        </div>
      </div>
      <Footer />
    </div>
  )
}