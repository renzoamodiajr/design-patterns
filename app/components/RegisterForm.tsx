import { useRegistrationForm } from '@/app/hooks/useRegistrationForm'
import React from 'react'

const RegisterForm = ({
  setShowRegForm,
}: {
  setShowRegForm: React.Dispatch<React.SetStateAction<boolean>>
}) => {
  const { register, handleSubmit, onRegister, errors } = useRegistrationForm({
    setShowRegForm,
  })

  return (
    <div className="w-full max-w-[500px] border-2 m-auto p-5 text-black translate-y-[30%]">
      <form
        autoComplete="off"
        className="registration-form flex flex-col gap-5"
      >
        <h2 className="font-bold text-lg">Register</h2>
        <div className="flex gap-2">
          <div className="w-full flex flex-col">
            <label>First Name</label>
            <input
              className="p-2 border-[1] border-gray-500"
              type="text"
              {...register('firstName', { required: 'This field is required' })}
            />
            {errors.firstName && (
              <span className="text-red-500 text-[12px]">
                {errors.firstName.message}
              </span>
            )}
          </div>
          <div className="w-full flex flex-col">
            <label>Middle Name</label>
            <input
              className="p-2 border-[1] border-gray-500"
              type="text"
              {...register('middleName', {
                required: 'This field is required',
              })}
            />
            {errors.middleName && (
              <span className="text-red-500 text-[12px]">
                {errors.middleName.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-full flex flex-col">
            <label>Last Name</label>
            <input
              className="p-2 border-[1] border-gray-500"
              type="text"
              {...register('lastName', { required: 'This field is required' })}
            />
            {errors.lastName && (
              <span className="text-red-500 text-[12px]">
                {errors.lastName.message}
              </span>
            )}
          </div>
          <div className="w-full flex flex-col">
            <label>Suffix</label>
            <input
              className="p-2 border-[1] border-gray-500"
              type="text"
              {...register('suffix', { required: 'This field is required' })}
            />
            {errors.suffix && (
              <span className="text-red-500 text-[12px]">
                {errors.suffix.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-full flex flex-col">
            <label>Email Address</label>
            <input
              className="p-2 border-[1] border-gray-500"
              type="email"
              autoComplete="new-username"
              {...register('emailAddress', {
                required: 'This field is required',
              })}
            />
            {errors.emailAddress && (
              <span className="text-red-500 text-[12px]">
                {errors.emailAddress.message}
              </span>
            )}
          </div>
          <div className="w-full flex flex-col">
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
        </div>
        <button
          onClick={handleSubmit(onRegister)}
          type="button"
          className="bg-black text-white w-full border-[1] hover:cursor-pointer p-1.5 rounded-full"
        >
          Register
        </button>
        <div className="flex gap-2">
          Already have existing account?{' '}
          <span
            onClick={() => setShowRegForm(false)}
            className="text-cyan-500 hover:cursor-pointer"
          >
            Login
          </span>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm
