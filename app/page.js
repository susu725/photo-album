'use client';

import { useState } from 'react'
import Footer from './_components/Footer/Footer'
import styles from './page.module.scss'

export default function Login() {
  const [userId, setUserId] = useState()

  const handleInput = e => {
    setUserId(e.target.value)
  }

  return (
    <div className={styles.login}>
      <div />
      <div className={styles.container}>
        <input type='text' placeholder='User ID' onChange={handleInput} />
        <button className={styles.loginBtn}><p>Log in</p></button>
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