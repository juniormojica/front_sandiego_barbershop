import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBarbers, addBarber, deleteBarber, toggleBarberState } from '../../features/barbers/barbersSlice'
import CreateBarber from '../CreateBarber/CreateBarber'
import Barbers from '../Barbers/Barbers'
import Swal from 'sweetalert2'

const BarbersManagement = () => {
  const dispatch = useDispatch()
  const { barbers, isLoading, error } = useSelector((state) => state.barbers)

  const [searchTerm, setSearchTerm] = useState('')
  const [newBarber, setNewBarber] = useState({
    name: '',
    phone: ''
  })

  // Debug logging
  useEffect(() => {
    console.log('Barbers in component:', barbers)
    console.log('Loading state:', isLoading)
    console.log('Error state:', error)
  }, [barbers, isLoading, error])

  // Fetch barbers when the component is mounted
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await dispatch(fetchBarbers()).unwrap()
        console.log('Fetch result:', result)
      } catch (error) {
        console.error('Failed to fetch barbers:', error)
      }
    }

    fetchData()
  }, [dispatch])

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
  }

  const handleNewBarberChange = (e) => {
    const { name, value } = e.target
    setNewBarber((prev) => ({ ...prev, [name]: value }))
  }
  // Delete a barber
  const handleDeleteBarber = async (id) => {
    try {
      const result = await dispatch(deleteBarber(id)).unwrap()

      Swal.fire({
        icon: 'success',
        title: '¡Barbero desactivado!',
        text: result.message
      })
    } catch (error) {
      console.error('Fallo al deactivar barbero:', error)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo desactivar el barbero. Intenta nuevamente.'
      })
    }
  }

  // Agregar un nuevo barbero
  const handleAddBarber = async () => {
    if (newBarber.name && newBarber.phone) {
      try {
        const result = await dispatch(addBarber(newBarber)).unwrap()

        Swal.fire({
          icon: 'success',
          title: '¡Barbero agregado!',
          text: `El barbero ${newBarber.name} ha sido agregado exitosamente.`
        })

        // Resetear el formulario
        setNewBarber({ name: '', phone: '' })
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo agregar el barbero. Intenta nuevamente.'
        })
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor llena todos los campos requeridos.'
      })
    }
  }

  const handleToggleBarberState = async (id) => {
    try {
      const result = await dispatch(toggleBarberState(id)).unwrap()

      Swal.fire({
        icon: 'success',
        title: 'Estado cambiado',
        text: result.message
      })
    } catch (error) {
      console.error('Failed to toggle barber state:', error)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo cambiar el estado del barbero. Intenta nuevamente.'
      })
    }
  }

  // Filter barbers by search term
  const filteredBarbers = barbers.filter((barber) =>
    barber.state === 'active' && barber.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className='container'>
      {/* Search input */}
      <div className='d-flex justify-content-center p-2 align-items-center'>
        <input
          className='form-control w-50'
          type='search'
          placeholder='Buscar Barbero'
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>

      {/* Add Barber Form */}
      <CreateBarber
        handleNewBarberChange={handleNewBarberChange}
        handleAddBarber={handleAddBarber}
        newBarber={newBarber}
      />

      {/* Loading state */}
      {isLoading && (
        <div className='text-center mt-3'>
          <div className='spinner-border' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      )}

      {/* Error handling */}
      {error && (
        <div className='alert alert-danger mt-3' role='alert'>
          {error}
        </div>
      )}

      {/* Render Barbers component */}
      {!isLoading && (
        <Barbers
          barbers={filteredBarbers}
          onToggleState={handleToggleBarberState}
        />
      )}
    </div>
  )
}

export default BarbersManagement
