import s from './Barbers.module.css'

const Barbers = ({ barbers, isLoading, error, onDelete }) => {
  console.log('Barbers received:', barbers)

  if (isLoading) {
    return <p>Cargando...</p>
  }

  if (error) {
    return <p className='text-danger'>Error: {error}</p>
  }

  if (!barbers.length) {
    return <p>No se encontraron barberos.</p>
  }

  return (
    <section className={`${s.findedClientsMainContainer} mt-3 mr-3`}>
      <div className={`${s.findedClientContainer}`}>
        <ul className={`d-flex flex-column ${s.findedClientsList}`}>
          {barbers.map((barber) => (
            <div
              key={barber.idBarber}
              className={`d-flex justify-content-between align-items-center mb-2 pb-2 border-bottom ${s.barberCard}`}
            >
              <div className='flex-grow-1 me-5'>
                <li className={`${s.name} fs-6 fw-bold`}>{barber.name}</li>
                <small className='text-muted'>
                  Teléfono: {barber.phone} <br />  Estado: {barber.state}
                </small>
              </div>
              <div className={`d-flex ${s.actions}`}>
                <button
                  className={`${s.detailButton} me-2`}
                  onClick={() => alert(`Details for ${barber.name}`)}
                >
                  Detalles
                </button>
                <button
                  className={`${s.deleteButton}`}
                  onClick={() => onDelete(barber.idBarber)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Barbers
