import { useState, useEffect, ChangeEvent } from 'react'
import { useForm } from 'react-hook-form'
import { insertUser } from './useLocalStorage'

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
  password: '',
}

export function useRegistrationForm({
  setShowRegForm,
}: {
  setShowRegForm: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormTypes>({
    defaultValues: DefaultValues,
  })

  const onRegister = async (data: RegisterFormTypes) => {
    insertUser(JSON.stringify(data))
    setShowRegForm(false)
  }

  return {
    register,
    handleSubmit,
    onRegister,
    errors,
  }
}
