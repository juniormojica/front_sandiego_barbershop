import { useState } from 'react'
export default function usePasswordVisibility () {
  const [showPassword, setShowPassword] = useState(true)

  const toogleShowPassword = () => {
    setShowPassword(!showPassword)
  }

  return {
    toogleShowPassword,
    showPassword
  }
}
