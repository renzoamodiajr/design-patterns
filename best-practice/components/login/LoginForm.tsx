'use client'

import React, { useState } from 'react'

interface LoginFormTypes {
  username: string
  password: string
}

const Login = () => {
  const [showRegForm, setShowRegForm] = useState<boolean>(false)
  const [loginForm, setLoginForm] = useState<LoginFormTypes>({
    username: '',
    password: ''
  })

  const handleLoginForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev: LoginFormTypes) => ({...prev, [e.target.name]: e.target.value}))
  }
  
  const handleShowRegForm = () => {
    setShowRegForm(!showRegForm)
  }

  return (
    <div className='w-full max-w-[500px] border-2 m-auto p-5 text-black translate-y-[50%]'>
        <section className="login-form flex flex-col gap-5">
          <h2 className='font-bold text-lg'>Login</h2>
          <div className="flex flex-col">
            <label>Username:</label>
            <input className='p-2 border-[1] border-gray-500' type="text" value={loginForm.username} onChange={handleLoginForm} name='username' />
          </div>
          <div className="flex flex-col">
            <label>Password:</label>
            <input className='p-2 border-[1] border-gray-500' type="password" value={loginForm.password} onChange={handleLoginForm} name='password' />
          </div>
          <div className='flex gap-2'>
            No account yet? <span onClick={handleShowRegForm} className='text-cyan-500 hover:cursor-pointer'>Register</span>
          </div>
        </section>
    </div>
  )
}

export default Login
