import { useForm } from '@/app/hooks/useForm'
import React, { useState } from 'react'

interface RegisterFormTypes {
  firstName: string
  middleName: string
  lastName: string
  suffix: string
  emailAddress: string
  password: string
}

const DefaultValues: RegisterFormTypes = {
  firstName: '',
  middleName: '',
  lastName: '',
  suffix: '',
  emailAddress: '',
  password: ''
}

const RegisterForm = () => {
  const [showRegForm, setShowRegForm] = useState<boolean>(false)
 
  const { formData, fieldError, handleChange, handleSubmit } = useForm<RegisterFormTypes>({
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

  const register = async (data: RegisterFormTypes) => {
    console.log('Logged in with:', data)
  }
  
  const handleShowRegForm = () => {
    setShowRegForm(!showRegForm)
  }

  return (
    <div className='w-full max-w-[500px] border-2 m-auto p-5 text-black translate-y-[30%]'>
        <form className="registration-form flex flex-col gap-5">
          <h2 className='font-bold text-lg'>Register</h2>
          <div className="flex gap-2">
            <div className="w-full flex flex-col">
              <label>First Name:</label>
              <input className='p-2 border-[1] border-gray-500' autoComplete='false' type="text" value={formData.firstName} onChange={handleChange} name='firstName' />
              {fieldError.firstName && (
                <span className='text-red-500 text-[12px]'>{fieldError.firstName.message}</span>
              )}
            </div>
            <div className="w-full flex flex-col">
              <label>Middle Name:</label>
              <input className='p-2 border-[1] border-gray-500' autoComplete='false' type="text" value={formData.middleName} onChange={handleChange} name='middleName' />
              {fieldError.middleName && (
                <span className='text-red-500 text-[12px]'>{fieldError.middleName.message}</span>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-full flex flex-col">
              <label>Last Name:</label>
              <input className='p-2 border-[1] border-gray-500' autoComplete='false' type="text" value={formData.lastName} onChange={handleChange} name='lastName' />
              {fieldError.lastName && (
                <span className='text-red-500 text-[12px]'>{fieldError.lastName.message}</span>
              )}
            </div>
            <div className="w-full flex flex-col">
              <label>Suffix:</label>
              <input className='p-2 border-[1] border-gray-500' autoComplete='false' type="text" value={formData.suffix} onChange={handleChange} name='suffix' />
              {fieldError.suffix && (
                <span className='text-red-500 text-[12px]'>{fieldError.suffix.message}</span>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-full flex flex-col">
              <label>Email Address:</label>
              <input className='p-2 border-[1] border-gray-500' autoComplete='false' type="text" value={formData.emailAddress} onChange={handleChange} name='emailAddress' />
              {fieldError.emailAddress && (
                <span className='text-red-500 text-[12px]'>{fieldError.emailAddress.message}</span>
              )}
            </div>
            <div className="w-full flex flex-col">
              <label>Password:</label>
              <input className='p-2 border-[1] border-gray-500' autoComplete='false' type="password" value={formData.password} onChange={handleChange} name='password' />
              {fieldError.password && (
                <span className='text-red-500 text-[12px]'>{fieldError.password.message}</span>
              )}
            </div>
          </div>
          <button onClick={() => handleSubmit(register)} type='button' className='bg-black text-white w-full border-[1] hover:cursor-pointer p-1.5 rounded-full'>Register</button>
          <div className='flex gap-2'>
            Already have existing account? <span onClick={handleShowRegForm} className='text-cyan-500 hover:cursor-pointer'>Login</span>
          </div>
        </form>
    </div>
  )
}

export default RegisterForm
