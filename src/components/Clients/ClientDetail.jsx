import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateClient } from '../../features/clients/clientsSlice'
import { validateClientUpdate } from '../../utils/validateClient'
import Swal from 'sweetalert2'

export default function ClientDetail({ name, idClient, phone }) {
    const [client, setClient] = useState({ name, idClient, phone })
    const [isEditing, setIsEditing] = useState(false)
    const [errors, setErrors] = useState({})
    const dispatch = useDispatch()

    const handleClientInfo = (event) => {
        const property = event.target.name
        const value = event.target.value
        setClient({ ...client, [property]: value })
    }

    const handleEditToggle = () => {
        setIsEditing(!isEditing)
    }

    const handleUpdate = (event) => {
        event.preventDefault()
        if (validateClientUpdate(client, setErrors)) {
            dispatch(
                updateClient({
                    idClient,
                    name: client.name,
                    phone: client.phone,
                })
            )
                .unwrap()
                .then(() => {
                    Swal.fire({
                        title: '¡Cliente actualizado!',
                        text: 'El cliente se ha actualizado exitosamente.',
                        icon: 'success',
                        confirmButtonText: 'Ok',
                    })
                    setIsEditing(false)
                })
                .catch((error) => {
                    console.log('Error al actualizar el cliente', error)
                })
        } else {
            Swal.fire({
                title: 'Datos inválidos',
                text: 'Por favor revisa los campos y corrige los errores.',
                icon: 'warning',
                confirmButtonText: 'Ok',
            })
        }
    }

    return (
        <div>
            <div
                className="modal fade"
                id={`clientDetailModal-${idClient}`}
                tabIndex="-1"
                aria-labelledby="clientDetailModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1
                                className="modal-title fs-5"
                                id="clientDetailModalLabel"
                            >
                                Detalles
                            </h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleUpdate}>
                                <div className="mb-3">
                                    <label
                                        htmlFor="clientName"
                                        className="form-label"
                                    >
                                        Nombre
                                    </label>
                                    <input
                                        onChange={handleClientInfo}
                                        name="name"
                                        type="text"
                                        className="form-control"
                                        id="clientName"
                                        value={client.name}
                                        disabled={!isEditing}
                                    />
                                    {errors.name && (
                                        <div className="text-danger">
                                            {errors.name}
                                        </div>
                                    )}
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="clientPhone"
                                        className="form-label"
                                    >
                                        Teléfono
                                    </label>
                                    <input
                                        onChange={handleClientInfo}
                                        name="phone"
                                        type="tel"
                                        className="form-control"
                                        id="clientPhone"
                                        value={client.phone}
                                        disabled={!isEditing}
                                    />
                                    {errors.phone && (
                                        <div className="text-danger">
                                            {errors.phone}
                                        </div>
                                    )}
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    disabled={!isEditing}
                                >
                                    Guardar cambios
                                </button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Cerrar
                            </button>
                            <button
                                type="button"
                                className="btn btn-warning"
                                onClick={handleEditToggle}
                            >
                                {isEditing ? 'Cancelar' : 'Editar'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
