import s from './SignIn.module.css'
import CompanyLogo from "../Company/CompanyLogo"
import SignInButton from '../Buttons/SignInButton'
import { useState, useEffect } from 'react'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { validatelogin } from '../../validations/signInValidation';
import usePasswordVisibility from '../../Hooks/usePasswordVisibility';
export default function SignIn({ variant }) {
  const className = s[variant] || s.default

  console.log(className);

  const { showPassword, toogleShowPassword } = usePasswordVisibility()
  const [error, setError] = useState({
    emailError: '',
    passwordError: ''
  })
  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  })
  const [touched, setTouched] = useState({
    email: false,
    password: false
  })





  useEffect(() => {
    if (touched) {
      validatelogin(userInfo, setError, touched)
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



  return (

    < section className={className} >

      <div className={s.signInContainer}>
        <CompanyLogo margin='marginNone' fontColor='fontColor' />
        <h3>Bienvenido</h3>

        <div className={s.singInForm}>
          <form action="">
            <div>
              <input onChange={handleUserLogin}
                className={s.singInInput}
                placeholder='Email'
                type="text"
                name='email'
                value={userInfo.email}
              />
            </div>
            {error.emailError ? <p className={s.error}>{error.emailError}</p> : ''}

            <div className={s.passWordContainer}>
              <input onChange={handleUserLogin}
                name='password'
                className={s.singInInput}
                placeholder='Contraseña'
                type={showPassword ? 'password' : 'text'}
                value={userInfo.password}
              />
              <button
                type="button"
                onClick={toogleShowPassword}
                className={s.passwordButton}

              >
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} className={s.iconButton} />
              </button>
            </div>
            {error.passwordError ? <p className={s.error}>{error.passwordError}</p> : ''}

          </form>
          <div className={s.forgetContainer}>
            <p>olvidaste la contraseña?</p>
          </div >
          <div className={s.signInButton}>
            <SignInButton variant='signInBlue' />
          </div>

        </div>
      </div>


    </section >
  )
}