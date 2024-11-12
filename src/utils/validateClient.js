export const validateClient = (client, setErrors) => {
    let isValid = true
    const errors = {}

    // Validate name
    if (!client.name) {
        errors.name = 'El nombre es requerido'
        isValid = false
    }

    // Validate email
    if (!client.email) {
        errors.email = 'El correo electrónico es requerido'
        isValid = false
    } else if (!/\S+@\S+\.\S+/.test(client.email)) {
        errors.email = 'El correo electrónico no es válido'
        isValid = false
    }

    // Validate phone
    if (!client.phone) {
        errors.phone = 'El teléfono es requerido'
        isValid = false
    } else if (!/^\d{10}$/.test(client.phone)) {
        errors.phone = 'El teléfono debe contener 10 dígitos'
        isValid = false
    }

    setErrors(errors)
    return isValid
}

export const validateClientUpdate = (client, setErrors) => {
    let isValid = true
    const errors = {}

    // Validate name
    if (!client.name) {
        errors.name = 'El nombre es requerido'
        isValid = false
    }

    // Validate phone
    if (!client.phone) {
        errors.phone = 'El teléfono es requerido'
        isValid = false
    } else if (!/^\d{10}$/.test(client.phone)) {
        errors.phone = 'El teléfono debe contener 10 dígitos'
        isValid = false
    }

    setErrors(errors)
    return isValid
}
