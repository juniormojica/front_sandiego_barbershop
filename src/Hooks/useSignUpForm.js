import { validateRegister } from '../validations/signUpValidation'
import { useState, useEffect } from 'react'

export const useSignUpForm = () => {
  const [error, setError] = useState({
    emailError: '',
    passwordError: '',
    phoneError: '',
    userNameError: '',
    confirmPasswordError: ''
  })
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: '',
    phone: '',
    userName: '',
    confirmPassword: ''
  })
  const [touched, setTouched] = useState({
    email: false,
    password: false,
    phone: false,
    userName: false,
    confirmPassword: false
  })

  useEffect(() => {
    if (touched) {
      validateRegister(userInfo, setError, touched)
    }
  }, [userInfo, touched])

  const handleUserLogin = (event) => {
    const { name } = event.target
    const { value } = event.target

    setUserInfo({
      ...userInfo,
      [name]: value
    })

    setTouched({
      ...touched,
      [name]: true
    })
  }

  return { userInfo, error, handleUserLogin }
}
