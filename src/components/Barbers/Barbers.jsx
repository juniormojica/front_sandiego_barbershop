import React from 'react'
import PropTypes from 'prop-types'
import styles from './Barbers.module.css' // Importamos el CSS Module

const Barbers = ({ barbers, onToggleState }) => {
  return (
    <div className={styles.barbersList}>
      {barbers.map((barber) => (
        <div
          key={barber.idBarber}
          className={`${styles.barberCard} ${
            barber.state === 'inactive' ? styles.inactive : ''
          }`}
        >
          <p><strong>Nombre:</strong> {barber.name}</p>
          <p><strong>Teléfono:</strong> {barber.phone}</p>
          <button
            className='btn btn-primary'
            onClick={() => onToggleState(barber.idBarber)}
          >
            {barber.state === 'active' ? 'Desactivar' : 'Activar'}
          </button>
        </div>
      ))}
    </div>
  )
}

Barbers.propTypes = {
  barbers: PropTypes.arrayOf(
    PropTypes.shape({
      idBarber: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired
    })
  ).isRequired,
  onToggleState: PropTypes.func.isRequired
}

export default Barbers
