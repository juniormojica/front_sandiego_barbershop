import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './ServiceManagement.module.css'
import ServiceList from '../ServiceList/ServiceList'
import ServiceForm from '../ServiceForm/ServiceForm'
import { fetchServices, addService, updateService, deleteService, setSelectedService } from '../../features/services/serviceSlice'

const ServiceManagement = () => {
  const dispatch = useDispatch()
  const {
    services,
    selectedService,
    isLoading,
    error
  } = useSelector((state) => state.services)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Fetch services on component mount
  useEffect(() => {
    dispatch(fetchServices())
  }, [dispatch])

  const handleAddService = () => {
    dispatch(setSelectedService(null))
    setIsModalOpen(true)
  }

  const handleEditService = (service) => {
    dispatch(setSelectedService(service))
    setIsModalOpen(true)
  }

  const handleDeleteService = (id) => {
    dispatch(deleteService(id))
  }

  const handleSubmit = (serviceData) => {
    if (selectedService) {
      // Update existing service
      dispatch(updateService({
        id: selectedService.idService,
        serviceData
      }))
    } else {
      // Add new service
      dispatch(addService(serviceData))
    }
    setIsModalOpen(false)
  }

  // Handle loading and error states
  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className={styles.container}>
      <h1>Service Management</h1>
      <button onClick={handleAddService}>Add New Service</button>

      <ServiceList
        services={services}
        onEdit={handleEditService}
        onDelete={handleDeleteService}
      />

      {isModalOpen && (
        <ServiceForm
          service={selectedService}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  )
}

export default ServiceManagement
