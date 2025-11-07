import { useState, useEffect, ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { getUser } from '../registration/useLocalStorage'

interface LoginFormTypes {
  username: string
  password: string
}

const DefaultValues: LoginFormTypes = {
  username: '',
  password: '',
}

export function useLoginForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setError,
  } = useForm<LoginFormTypes>({
    mode: 'onSubmit',
    defaultValues: DefaultValues,
  })

  const onLogin = async (data: LoginFormTypes) => {
    const user = getUser()
    if (user) {
      const { emailAddress, password } = user
      if (data.username !== emailAddress || data.password === password) {
        setError('password', { message: 'Invalid username or password' })
        return
      }
      console.log('Login successful')
    }
  }

  return {
    register,
    handleSubmit,
    onLogin,
    errors,
  }
}
