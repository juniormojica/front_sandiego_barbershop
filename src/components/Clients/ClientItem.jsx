import s from './ClientItem.module.css'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { deleteClient } from '../../features/clients/clientsSlice'
import ClientDetail from './ClientDetail'

export default function ClientItem ({ name, idClient, phone }) {
  const dispatch = useDispatch()

  const handleDelete = () => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: `Eliminaras a ${name}. No podrás revertir esta acción`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteClient(idClient))
          .then(() => {
            Swal.fire(
              '¡Eliminado!',
              'El cliente ha sido eliminado.',
              'success'
            )
          })
          .catch((error) => {
            if (error) {
              Swal.fire(
                'Error',
                'Ocurrió un error al eliminar el cliente.',
                'error'
              )
            }
          })
      }
    })
  }

  return (
    <div className='d-flex justify-content-center align-items-center flex-nowrap'>
      <li className='w-75 text-truncate me-5'>{name}</li>
      <div className='w-25 d-flex justify-content-end'>
        {/* Botón para abrir el modal */}
        {/* <button
                    type="button"
                    className={`${s.detailButton} btn btn-info me-2`}
                    data-bs-toggle="modal"
                    data-bs-target={`#clientDetailModal-${idClient}`} // Usa un id dinámico para cada modal
                >
                    Detalle
                </button> */}

        {/* Componente ClientDetail */}
        <ClientDetail name={name} idClient={idClient} phone={phone} />

        <button onClick={handleDelete} className={`${s.deleteButton}`}>
          Eliminar
        </button>
      </div>
    </div>
  )
}
