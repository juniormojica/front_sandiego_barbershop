import styles from './ServiceForm.module.css'

const ServiceForm = ({ onClose, onServiceAdded }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Add New Service</h2>

        <form>
          <div className={styles.formGroup}>
            <label htmlFor='serviceName'>Service Name</label>
            <input
              id='serviceName'
              type='text'
              placeholder='Enter service name'

            />

          </div>

          <div className={styles.formGroup}>
            <label htmlFor='duration'>Duration (minutes)</label>
            <input
              id='duration'
              type='number'
              placeholder='Enter service duration'

            />

          </div>

          <div className={styles.formGroup}>
            <label htmlFor='category'>Category</label>
            <input
              id='category'
              type='text'
              placeholder='Enter service category'

            />

          </div>

          <div className={styles.formActions}>
            <button
              type='button'
              className={styles.cancelButton}
              onClick={onClose}

            >
              Cancel
            </button>
            <button
              type='submit'
              className={styles.submitButton}

            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ServiceForm
