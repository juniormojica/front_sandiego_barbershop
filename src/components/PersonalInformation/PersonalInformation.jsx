import React from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2' // Import SweetAlert2
import styles from './PersonalInformation.module.css'

const PersonalInformation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = async (data) => {
    console.log('Form Data:', data)

    // Get user ID from localStorage
    const idUser = window.localStorage.getItem('idUser')
    const token = window.localStorage.getItem('token') // If needed for authorization

    if (!idUser || !token) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'User ID or Token is missing!'
      })
      return
    }

    // Prepare the payload
    const payload = {
      name: data.name,
      phone: data.phone,
      idUser
    }

    try {
      // Send data to the backend using fetch
      const response = await fetch('http://localhost:3000/clients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}` // Optional, if token is required for auth
        },
        body: JSON.stringify(payload)
      })

      if (!response.ok) {
        throw new Error('Error creating client')
      }

      const responseData = await response.json()
      console.log('Client created successfully:', responseData)

      // Show success message with SweetAlert2
      Swal.fire({
        icon: 'success',
        title: 'Client Created!',
        text: 'Your client has been successfully created.'
      })

      // You can also clear the form or redirect the user, for example:
      // reset()  // If you want to reset the form (optional)
    } catch (error) {
      console.error('Failed to create client:', error)

      // Show error message with SweetAlert2
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error.message || 'Failed to create client. Please try again later.'
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.formGroup}>
        <label htmlFor='name' className={styles.label}>Nombre Completo:</label>
        <input
          id='name'
          type='text'
          className={styles.input}
          {...register('name', { required: 'Name is required' })}
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>

      <div className={styles.formGroup}>
        <label htmlFor='phone' className={styles.label}>Telefono:</label>
        <input
          id='phone'
          type='tel'
          className={styles.input}
          {...register('phone', {
            required: 'Phone number is required',
            pattern: {
              value: /^[0-9]{10,15}$/,
              message: 'Invalid phone number format'
            }
          })}
        />
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}
      </div>

      <button type='submit' className={styles.button}>Submit</button>
    </form>
  )
}

export default PersonalInformation
