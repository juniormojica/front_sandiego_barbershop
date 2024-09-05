export const validateRegister = (userInfo, setError, touched) => {
  let emailError = ''
  let passwordError = ''
  let phoneError = ''
  let userNameError = ''
  let confirmPasswordError = ''

  // Validación para el correo electrónico
  const trimmedEmail = userInfo.email.trim()
  if (touched.email) {
    if (userInfo.email === '') {
      emailError = 'Escribe un correo válido'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      emailError = 'El correo electrónico no es válido'
    } else if (trimmedEmail.length > 150) {
      emailError = 'El correo electrónico es demasiado largo'
    }
  }

  // Validación para la contraseña
  if (touched.password) {
    if (userInfo.password === '') {
      passwordError = 'Escribe una contraseña válida'
    } else if (userInfo.password.length < 6) {
      passwordError = 'La contraseña debe tener al menos 6 caracteres'
    }
  }

  // Validación para el nombre de usuario
  if (touched.userName) {
    if (userInfo.userName === '') {
      userNameError = 'Escribe un nombre de usuario válido'
    } else if (userInfo.userName.length < 3) {
      userNameError = 'El nombre de usuario debe tener al menos 3 caracteres'
    }
  }

  // Validación para el teléfono
  const trimmedPhone = userInfo.phone.trim()
  if (touched.phone) {
    if (userInfo.phone === '') {
      phoneError = 'Escribe un número de teléfono válido'
    } else if (!/^\+?[1-9]\d{1,14}$/.test(trimmedPhone)) {
      phoneError = 'El número de teléfono no es válido'
    }
  }

  // Validación para la confirmación de la contraseña
  if (touched.confirmPassword) {
    if (userInfo.confirmPassword === '') {
      confirmPasswordError = 'Confirma tu contraseña'
    } else if (userInfo.confirmPassword !== userInfo.password) {
      confirmPasswordError = 'Las contraseñas no coinciden'
    }
  }

  // Actualiza el estado de los errores
  setError({
    emailError,
    passwordError,
    phoneError,
    userNameError,
    confirmPasswordError
  })
}
