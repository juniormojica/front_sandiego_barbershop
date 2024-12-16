import styles from './ServiceList.module.css'

const ServiceList = ({ services, onEditService, onDeleteService }) => {
  return (
    <div className={styles.serviceListContainer}>
      <table className={styles.serviceTable}>
        <thead>
          <tr>
            <th>Service Name</th>
            <th>Duration</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {services.map((service) => (
            <tr key={service.idService}>
              <td>{service.serviceName}</td>
              <td>{service.duration} mins</td>
              <td>{service.category}</td>
              <td className={styles.actionButtons}>
                <button
                  className={styles.editButton}
                  onClick={() => onEditService(service)}
                >
                  Edit
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => onDeleteService(service.idService)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ServiceList
