'use client'

import LoginForm from '@/app/components/login/LoginForm'
import RegisterForm from '@/app/components/register/RegisterForm'
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
