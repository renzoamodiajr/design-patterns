import React, { useState } from 'react'

const RegisterForm = () => {
  const [showRegForm, setShowRegForm] = useState<boolean>(false)

  const [regFirstName, setRegFirstName] = useState('')
  const [regMiddleName, setRegMiddleName] = useState('')
  const [regLastName, setRegLastName] = useState('')
  const [regSuffix, setRegSuffix] = useState('')
  const [regEmailAddress, setRegEmailAddress] = useState('')
  const [regPassword, setRegPassword] = useState('')

  const [regFirstNameError, setRegFirstNameError] = useState({
    show: false,
    message: ''
  })
  const [regMiddleNameError, setRegMiddleNameError] = useState({
    show: false,
    message: ''
  })
  const [regLasNameError, setRegLasNameError] = useState({
    show: false,
    message: ''
  })
  const [regSuffixError, setRegSuffixError] = useState({
    show: false,
    message: ''
  })
  const [regEmailAddressError, setRegEmailAddressError] = useState({
    show: false,
    message: ''
  })
  const [regPasswordError, setRegPasswordError] = useState({
    show: false,
    message: ''
  })

  const handleShowRegForm = () => {
    setShowRegForm(!showRegForm)

    setRegFirstName('')
    setRegMiddleName('')
    setRegLastName('')
    setRegSuffix('')
    setRegEmailAddress('')
    setRegPassword('')
  }

  const handleChangeRegFirstName = (e: any) => {
      setRegFirstNameError({
          show: false,
          message: ''
      })
      setRegFirstName(e.target.value)
  }

  const handleChangeRegMiddleName = (e: any) => {
      setRegMiddleNameError({
          show: false,
          message: ''
      })
      setRegMiddleName(e.target.value)
  }

  const handleChangeRegLastName = (e: any) => {
      setRegLasNameError({
          show: false,
          message: ''
      })
      setRegLastName(e.target.value)
  }

  const handleChangeRegSuffix = (e: any) => {
      setRegSuffixError({
          show: false,
          message: ''
      })
      setRegSuffix(e.target.value)
  }

  const handleChangeRegEmailAddress = (e: any) => {
      setRegEmailAddressError({
          show: false,
          message: ''
      })
      setRegEmailAddress(e.target.value)
  }

  const handleChangeRegPassword = (e: any) => {
      setRegPasswordError({
          show: false,
          message: ''
      })
      setRegPassword(e.target.value)
  }

  const handleRegister = async () => {
    let errorCount = 0
    if(regFirstName == ''){
        setRegFirstNameError({
            show: true,
            message: 'This field is required.'
        })
        errorCount++
    }
    if(regMiddleName == ''){
        setRegMiddleNameError({
            show: true,
            message: 'This field is required.'
        })
        errorCount++
    }
    if(regLastName == ''){
        setRegLasNameError({
            show: true,
            message: 'This field is required.'
        })
        errorCount++
    }
    if(regSuffix == ''){
        setRegSuffixError({
            show: true,
            message: 'This field is required.'
        })
        errorCount++
    }
    if(regEmailAddress == ''){
        setRegEmailAddressError({
            show: true,
            message: 'This field is required.'
        })
        errorCount++
    }
    if(regPassword == ''){
        setRegPasswordError({
            show: true,
            message: 'This field is required.'
        })
        errorCount++
    }

    if(errorCount > 0){
        return
    }

    try {
        // submit to backend
        console.log('registered!')
    } catch (error) {
        // catch backend error
    }
  }
  return (
    <div className='w-full max-w-[500px] border-2 m-auto p-5 text-black translate-y-[30%]'>
        <form className="registration-form flex flex-col gap-5">
          <h2 className='font-bold text-lg'>Register</h2>
          <div className="flex gap-2">
            <div className="w-full flex flex-col">
              <label>First Name:</label>
              <input className='p-2 border-[1] border-gray-500' autoComplete='false' type="text" value={regFirstName} onChange={handleChangeRegFirstName} name='firstName' />
              {regFirstNameError.show && (
                <span className='text-red-500 text-[12px]'>{regFirstNameError.message}</span>
              )}
            </div>
            <div className="w-full flex flex-col">
              <label>Middle Name:</label>
              <input className='p-2 border-[1] border-gray-500' autoComplete='false' type="text" value={regMiddleName} onChange={handleChangeRegMiddleName} name='middleName' />
              {regMiddleNameError.show && (
                <span className='text-red-500 text-[12px]'>{regMiddleNameError.message}</span>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-full flex flex-col">
              <label>Last Name:</label>
              <input className='p-2 border-[1] border-gray-500' autoComplete='false' type="text" value={regLastName} onChange={handleChangeRegLastName} name='lastName' />
              {regLasNameError.show && (
                <span className='text-red-500 text-[12px]'>{regLasNameError.message}</span>
              )}
            </div>
            <div className="w-full flex flex-col">
              <label>Suffix:</label>
              <input className='p-2 border-[1] border-gray-500' autoComplete='false' type="text" value={regSuffix} onChange={handleChangeRegSuffix} name='suffix' />
              {regSuffixError.show && (
                <span className='text-red-500 text-[12px]'>{regSuffixError.message}</span>
              )}
            </div>
          </div>
          <div className="flex gap-2">
            <div className="w-full flex flex-col">
              <label>Email Address:</label>
              <input className='p-2 border-[1] border-gray-500' autoComplete='false' type="text" value={regEmailAddress} onChange={handleChangeRegEmailAddress} name='emailAddress' />
              {regEmailAddressError.show && (
                <span className='text-red-500 text-[12px]'>{regEmailAddressError.message}</span>
              )}
            </div>
            <div className="w-full flex flex-col">
              <label>Password:</label>
              <input className='p-2 border-[1] border-gray-500' autoComplete='false' type="password" value={regPassword} onChange={handleChangeRegPassword} name='password' />
              {regPasswordError.show && (
                <span className='text-red-500 text-[12px]'>{regPasswordError.message}</span>
              )}
            </div>
          </div>
          <button onClick={handleRegister} type='button' className='bg-black text-white w-full border-[1] hover:cursor-pointer p-1.5 rounded-full'>Register</button>
          <div className='flex gap-2'>
            Already have existing account? <span onClick={handleShowRegForm} className='text-cyan-500 hover:cursor-pointer'>Login</span>
          </div>
        </form>
    </div>
  )
}

export default RegisterForm
