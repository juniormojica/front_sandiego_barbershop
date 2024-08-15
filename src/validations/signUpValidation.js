export const validateRegister = (userInfo, setError, touched) => {
  let emailError = '';
  let passwordError = '';

  // Validación para el correo electrónico
  const trimmedEmail = userInfo.email.trim();
  if (touched.email) {
    if (userInfo.email === '') {
      emailError = 'Escribe un correo válido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      emailError = 'El correo electrónico no es válido';
    } else if (trimmedEmail.length > 254) {
      emailError = 'El correo electrónico es demasiado largo';
    }
  }


  // Validación para la contraseña
  if (touched.password) {
    if (userInfo.password === '') {
      passwordError = 'Escribe una contraseña válida';
    } else if (userInfo.password.length < 6) {
      passwordError = 'La contraseña debe tener al menos 6 caracteres';
    }
  }


  // Actualiza el estado de los errores
  setError({
    emailError,
    passwordError
  });
}