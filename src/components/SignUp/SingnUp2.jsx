import s from './SignUp2.module.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'
import CompanyLogo from '../Company/CompanyLogo'
import GoBackBtn from '../GoBackBtn/GoBackBtn'

const SignupForm = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm()

  const password = watch('password') // Get the current value of password
  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: data.username,
          email: data.email,
          password: data.password,
          roles: ['user']
        })
      })

      // Check if the response is okay
      if (!response.ok) {
        // Read the body as text for logging
        const errorText = await response.text()
        console.error('Server Error Response:', errorText)
        throw new Error('Failed to sign up')
      }

      // Parse the JSON response
      const result = await response.json()

      window.localStorage.setItem('token', result.token)
      window.localStorage.setItem('idUser', result.idUser)
      console.log('this is on the local storage', window.localStorage.getItem('token  '))
      // Show success alert
      Swal.fire({
        title: 'Success!',
        text: `Signup successful! Token: ${result.token} , ${result.idUser}`,
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        navigate('/info')
      })
    } catch (error) {
      // Handle and display errors
      Swal.fire({
        title: 'Error!',
        text: error.message || 'Something went wrong',
        icon: 'error',
        confirmButtonText: 'Try Again'
      })
    }
  }

  return (
    <div className={s.container}>
      <GoBackBtn path='/'>Ir al inicio</GoBackBtn>
      <CompanyLogo />
      <h2 className={s.title}>Registro</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
        {/* Email */}
        <div className={s.field}>
          <label className={s.label}>Correo Electronico:</label>
          <input
            className={s.input}
            type='email'
            {...register('email', { required: 'El email es requerido', pattern: /\S+@\S+\.\S+/ })}
          />
          {errors.email && <p className={s.error}>{errors.email.message}</p>}
        </div>

        {/* Password */}
        <div className={s.field}>
          <label className={s.label}>Contraseña:</label>
          <input
            className={s.input}
            type='password'
            {...register('password', {
              required: 'Contraseña requerida',
              minLength: { value: 6, message: 'La contraseña debe tener al menos 6 carácteres' }
            })}
          />
          {errors.password && <p className={s.error}>{errors.password.message}</p>}
        </div>

        {/* Confirm Password */}
        <div className={s.field}>
          <label className={s.label}>Confirmar Contraseña:</label>
          <input
            className={s.input}
            type='password'
            {...register('confirmPassword', {
              required: 'Confirmar Contraseña',
              validate: (value) => value === password || 'Las constraseñas no coinciden'
            })}
          />
          {errors.confirmPassword && <p className={s.error}>{errors.confirmPassword.message}</p>}
        </div>

        <button type='submit' className={s.button}>
          Registrarse
        </button>
      </form>
    </div>
  )
}

export default SignupForm
