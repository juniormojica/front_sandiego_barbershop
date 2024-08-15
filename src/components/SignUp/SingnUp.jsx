import s from './SignUp.module.css'
import CompanyLogo from '../Company/CompanyLogo'
import { useEffect, useState } from 'react'
import usePasswordVisibility from '../../Hooks/usePasswordVisibility'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import SignUpButton from '../Buttons/SingUpButton';
import { validateRegister } from '../../validations/signUpValidation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SignInButton from '../Buttons/SignInButton'
export default function SignUp() {
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


  return (
    <section>
      < section className={s.signUpMainContainer} >

        <div className={s.signUpContainer}>
          <CompanyLogo margin='marginNone' />
          <h3>Registrate</h3>

          <div className={s.singUpForm}>
            <form action="">
              <div>
                <input onChange={handleUserLogin}
                  className={s.singUpInput}
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
                  className={s.singUpInput}
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

            <div className={s.signUpButton}>
              <SignUpButton variant='signUp' />
            </div>

          </div>
          <div className={s.alreadyContainer}>
            <p>Tienes una cuenta?</p>
          </div >

          <SignInButton variant='signInRegister' />
        </div>


      </section >
    </section>
  )
}