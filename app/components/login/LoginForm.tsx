'use client'

import { useLoginForm } from '@/app/hooks/login/useLoginForm'
import React from 'react'

const LoginForm = ({
  setShowRegForm,
}: {
  setShowRegForm: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { register, onLogin, handleSubmit, errors } = useLoginForm()

  return (
    <div className="w-full max-w-[500px] border-2 m-auto p-5 text-black translate-y-[50%]">
      <form autoComplete="off" className="login-form flex flex-col gap-5">
        <h2 className="font-bold text-lg">Login</h2>
        <div className="flex flex-col">
          <label>Username</label>
          <input
            className="p-2 border-[1] border-gray-500"
            type="text"
            {...register('username', { required: 'This field is required' })}
          />
          {errors.username && (
            <span className="text-red-500 text-[12px]">
              {errors.username.message}
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label>Password</label>
          <input
            className="p-2 border-[1] border-gray-500"
            type="password"
            {...register('password', { required: 'This field is required' })}
          />
          {errors.password && (
            <span className="text-red-500 text-[12px]">
              {errors.password.message}
            </span>
          )}
        </div>
        <button
          onClick={handleSubmit(onLogin)}
          type="button"
          className="bg-black text-white w-full border-[1] hover:cursor-pointer p-1.5 rounded-full"
        >
          Login
        </button>
        <div className="flex gap-2">
          No account yet?{' '}
          <span
            onClick={() => setShowRegForm(true)}
            className="text-cyan-500 hover:cursor-pointer"
          >
            Register
          </span>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
