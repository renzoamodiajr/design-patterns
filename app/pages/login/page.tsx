'use client'

import LoginForm from '@/app/components/LoginForm'
import RegisterForm from '@/app/components/RegisterForm'
import { useState } from 'react'

const Login = () => {
  const [showRegForm, setShowRegForm] = useState<boolean>(false)

  return (
    <div>
      {showRegForm ? (
        <RegisterForm setShowRegForm={setShowRegForm} />
      ) : (
        <LoginForm setShowRegForm={setShowRegForm} />
      )}
    </div>
  )
}

export default Login
