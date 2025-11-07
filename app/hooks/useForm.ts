import { useState, useEffect, ChangeEvent } from 'react'

interface FieldError {
  [key: string]: { message: string }
}

interface UseFormProps<T> {
  defaultValues: T
  validate?: (formData: T) => FieldError
}

export function useForm<T extends Record<string, any>>({
  defaultValues,
  validate,
}: UseFormProps<T>) {
  const [formData, setFormData] = useState<T>(defaultValues)
  const [fieldError, setFieldError] = useState<FieldError>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  // --- Input change handler
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Remove error for this field
    setFieldError((prev) => {
      const updated = { ...prev }
      delete updated[name]
      return updated
    })
  }

  // --- Validation (re-run on formData change)
  useEffect(() => {
    if (validate) {
      const errors = validate(formData)
      setFieldError(errors)
    }
  }, [formData])

  // --- Submit handler wrapper
  const handleSubmit = async (callback: (formData: T) => Promise<void>) => {
    if (Object.keys(fieldError).length > 0) return
    setIsSubmitting(true)
    try {
      await callback(formData)
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    formData,
    fieldError,
    isSubmitting,
    handleChange,
    handleSubmit,
    setFormData,
  }
}
