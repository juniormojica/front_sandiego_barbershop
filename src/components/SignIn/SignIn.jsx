import s from './SignIn.module.css'
import CompanyLogo from '../Company/CompanyLogo'
import { useState, useEffect } from 'react'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { validatelogin } from '../../validations/signInValidation'
import usePasswordVisibility from '../../Hooks/usePasswordVisibility'

export default function SignIn () {
  const { showPassword, toogleShowPassword } = usePasswordVisibility()
  const [error, setError] = useState({ emailError: '', passwordError: '' })
  const [userInfo, setUserInfo] = useState({ email: '', password: '' })
  const [touched, setTouched] = useState({ email: false, password: false })

  useEffect(() => {
    if (touched) {
      validatelogin(userInfo, setError, touched)
    }
  }, [userInfo, touched])

  const handleUserLogin = (event) => {
    const { name, value } = event.target
    setUserInfo({ ...userInfo, [name]: value })
  }

  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true })
  }

  return (
    <div className={s.container}>
      <CompanyLogo />
      <h2 className={s.title}>Iniciar Sesión</h2>
      <form className={s.form}>
        <div className={s.field}>
          <label htmlFor='email' className={s.label}>
            Correo Electrónico
          </label>
          <input
            type='email'
            id='email'
            name='email'
            className={s.input}
            value={userInfo.email}
            onChange={handleUserLogin}
            onBlur={() => handleBlur('email')}
          />
          {error.emailError && touched.email && (
            <span className={s.error}>{error.emailError}</span>
          )}
        </div>
        <div className={s.field}>
          <label htmlFor='password' className={s.label}>
            Contraseña
          </label>
          <div style={{ position: 'relative' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              id='password'
              name='password'
              className={s.input}
              value={userInfo.password}
              onChange={handleUserLogin}
              onBlur={() => handleBlur('password')}
            />
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              onClick={toogleShowPassword}
              style={{
                position: 'absolute',
                right: '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                cursor: 'pointer'
              }}
            />
          </div>
          {error.passwordError && touched.password && (
            <span className={s.error}>{error.passwordError}</span>
          )}
        </div>
        <button type='submit' className={s.button}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  )
}
