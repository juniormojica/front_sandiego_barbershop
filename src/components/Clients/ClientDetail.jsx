import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateClient } from '../../features/clients/clientsSlice'
import { validateClientUpdate } from '../../utils/validateClient'
import s from './ClientDetail.module.css'
import Swal from 'sweetalert2'

export default function ClientDetail ({ name, idClient, phone }) {
  const [client, setClient] = useState({ name, idClient, phone })
  const [isEditing, setIsEditing] = useState(false)
  const [errors, setErrors] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false) // Controlar la visibilidad del modal
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
          phone: client.phone
        })
      )
        .unwrap()
        .then(() => {
          Swal.fire({
            title: '¡Cliente actualizado!',
            text: 'El cliente se ha actualizado exitosamente.',
            icon: 'success',
            confirmButtonText: 'Ok'
          }).then(() => {
            setIsEditing(false)
            setIsModalOpen(false) // Cerrar el modal
          })
        })
        .catch((error) => {
          console.log('Error al actualizar el cliente', error)
        })
    } else {
      Swal.fire({
        title: 'Datos inválidos',
        text: 'Por favor revisa los campos y corrige los errores.',
        icon: 'warning',
        confirmButtonText: 'Ok'
      })
    }
  }

  // Función para cerrar el modal al hacer clic fuera del contenido
  const closeModalOnBackdropClick = (event) => {
    if (event.target.classList.contains('modal-backdrop')) {
      setIsModalOpen(false)
    }
  }

  return (
    <div>
      {/* Botón para abrir el modal */}
      <button onClick={() => setIsModalOpen(true)} className={`${s.detailButton}`}>Detalles</button>

      {/* Mostrar el modal solo si isModalOpen es true */}
      {isModalOpen && (
        <>
          {/* Fondo oscuro del modal */}
          <div
            className={`${s.modalBackdrop}`}
            onClick={closeModalOnBackdropClick}
          />

          {/* Contenido del modal */}
          <div
            className={`${s.modalContent}`}
          >
            <div className='modal-header'>
              <h1 className=' btn btn-info me-2 modal-title fs-5'>Detalles</h1>
              <button
                type='button'
                className='btn-close'
                onClick={() => setIsModalOpen(false)}
              >
                &times;
              </button>
            </div>
            <div className='modal-body'>
              <form onSubmit={handleUpdate}>
                <div className='mb-3'>
                  <label
                    htmlFor='clientName'
                    className='form-label'
                  >
                    Nombre
                  </label>
                  <input
                    onChange={handleClientInfo}
                    name='name'
                    type='text'
                    className='form-control'
                    id='clientName'
                    value={client.name}
                    disabled={!isEditing}
                  />
                  {errors.name && (
                    <div className='text-danger'>
                      {errors.name}
                    </div>
                  )}
                </div>
                <div className='mb-3'>
                  <label
                    htmlFor='clientPhone'
                    className='form-label'
                  >
                    Teléfono
                  </label>
                  <input
                    onChange={handleClientInfo}
                    name='phone'
                    type='tel'
                    className='form-control'
                    id='clientPhone'
                    value={client.phone}
                    disabled={!isEditing}
                  />
                  {errors.phone && (
                    <div className='text-danger'>
                      {errors.phone}
                    </div>
                  )}
                </div>
                <button
                  type='submit'
                  className='btn btn-primary'
                  disabled={!isEditing}
                >
                  Guardar cambios
                </button>
              </form>
            </div>
            <div className='modal-footer'>
              <button
                type='button'
                className='btn btn-secondary'
                onClick={() => setIsModalOpen(false)}
              >
                Cerrar
              </button>
              <button
                type='button'
                className='btn btn-warning'
                onClick={handleEditToggle}
              >
                {isEditing ? 'Cancelar' : 'Editar'}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
