'use client'

import { useForm } from '@/app/hooks/useForm'
import React, { useEffect, useState } from 'react'
import RegisterForm from '../register/RegisterForm'

interface LoginFormTypes {
  username: string
  password: string
}

const DefaultValues: LoginFormTypes = {
  username: '',
  password: ''
}

const LoginForm = () => {
  const [showRegForm, setShowRegForm] = useState<boolean>(false)
  const { formData, fieldError, handleChange, handleSubmit } = useForm<LoginFormTypes>({
    defaultValues: DefaultValues,
    validate: (data) => {
      const errors: any = {}
      Object.entries(data).forEach(([key, value]) => {
        if (value.trim() === '') {
          errors[key] = { message: 'This field is required' }
        }
      })
      return errors
    },
  })

  const login = async (data: LoginFormTypes) => {
    console.log('Logged in with:', data)
  }

  const handleShowRegForm = () => {
    setShowRegForm(!showRegForm)
  }


  return (
    <>
    {showRegForm ? (
      <RegisterForm />
    ) : (
      <div className='w-full max-w-[500px] border-2 m-auto p-5 text-black translate-y-[50%]'>
        <form className="login-form flex flex-col gap-5">
          <h2 className='font-bold text-lg'>Login</h2>
          <div className="flex flex-col">
            <label>Username:</label>
            <input className='p-2 border-[1] border-gray-500' autoComplete='false' type="text" value={formData.username} onChange={handleChange} name='username' />
            {fieldError.username && (
              <span className='text-red-500 text-[12px]'>{fieldError.username.message}</span>
            )}
          </div>
          <div className="flex flex-col">
            <label>Password:</label>
            <input className='p-2 border-[1] border-gray-500' autoComplete='false' type="password" value={formData.password} onChange={handleChange} name='password' />
            {fieldError.password && (
              <span className='text-red-500 text-[12px]'>{fieldError.password.message}</span>
            )}
          </div>
          <button onClick={() => handleSubmit(login)} type='button' className='bg-black text-white w-full border-[1] hover:cursor-pointer p-1.5 rounded-full'>Login</button>
          <div className='flex gap-2'>
            No account yet? <span onClick={handleShowRegForm} className='text-cyan-500 hover:cursor-pointer'>Register</span>
          </div>
        </form>
      </div>
      )}
    </>
  )
}

export default LoginForm
