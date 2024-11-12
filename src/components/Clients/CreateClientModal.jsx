import { useState } from 'react'
import { validateClient } from '../../utils/validateClient'
import { createClient } from '../../features/clients/clientsSlice'
import { useDispatch } from 'react-redux'
import { X, Save } from 'lucide-react'
import s from './CreateClientModal.module.css'
import Swal from 'sweetalert2' // Importar SweetAlert2

export default function CreateClientModal() {
    const [client, setClient] = useState({
        name: '',
        email: '',
        phone: '',
    })

    const [errors, setErrors] = useState({})
    const [isModalOpen, setIsModalOpen] = useState(false) // Estado para controlar el modal
    const dispatch = useDispatch()

    const handleClientInfo = (event) => {
        const property = event.target.name
        const value = event.target.value

        setClient({
            ...client,
            [property]: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (validateClient(client, setErrors)) {
            console.log('Datos del cliente válidos', client)
            dispatch(createClient(client))
                .unwrap()
                .then(() => {
                    console.log('Cliente guardado exitosamente')
                    setClient({
                        name: '',
                        email: '',
                        phone: '',
                    })
                    Swal.fire({
                        title: '¡Cliente creado!',
                        text: 'El cliente se ha creado exitosamente.',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                    })
                    setIsModalOpen(false) // Cerrar el modal después de guardar
                })
                .catch((error) => {
                    console.log('Error al guardar el cliente', error)
                })
        } else {
            console.log('Datos del cliente inválidos', errors)
            Swal.fire({
                title: 'Datos inválidos',
                text: 'Por favor revisa los campos y corrige los errores.',
                icon: 'warning',
                confirmButtonText: 'Ok',
            })
        }
    }

    // Función para cerrar el modal al hacer clic fuera del contenido
    const closeModalOnBackdropClick = (event) => {
        if (event.target.classList.contains(s.modalBackdrop)) {
            setIsModalOpen(false)
        }
    }

    return (
        <>
            {/* Botón para abrir el modal */}
            <button onClick={() => setIsModalOpen(true)}>Crear Cliente</button>

            {/* Mostrar el modal solo si isModalOpen es true */}
            {isModalOpen && (
                <>
                    {/* Fondo oscuro del modal */}
                    <div
                        className={s.modalBackdrop}
                        onClick={closeModalOnBackdropClick}
                    />

                    {/* Contenido del modal */}
                    <div className={s.modalMain}>
                        <button onClick={() => setIsModalOpen(false)}>
                            <X />
                        </button>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="clientName" className="form-label">
                                        Nombre
                                    </label>
                                    <input
                                        onChange={handleClientInfo}
                                        name="name"
                                        type="text"
                                        className="form-control"
                                        id="clientName"
                                        placeholder="Junior Mojica"
                                    />
                                    {errors.name && (
                                        <div className="text-danger">{errors.name}</div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="clientEmail" className="form-label">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        onChange={handleClientInfo}
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        id="clientEmail"
                                        placeholder="juniormojica26@gmail.com"
                                    />
                                    {errors.email && (
                                        <div className="text-danger">{errors.email}</div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="clientPhone" className="form-label">
                                        Teléfono
                                    </label>
                                    <input
                                        onChange={handleClientInfo}
                                        name="phone"
                                        type="tel"
                                        className="form-control"
                                        id="clientPhone"
                                        placeholder="3218710632"
                                    />
                                    {errors.phone && (
                                        <div className="text-danger">{errors.phone}</div>
                                    )}
                                </div>
                                <div>
                                    <button className="btn btn-primary">
                                        <Save /> Guardar Cliente
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
