import { useState, useEffect } from 'react'
import s from './Barbers.module.css'
import SideNavigation from '../SideNavigation/SideNavigation'

const Barbers = ({ barbers, isLoading, error, onDelete }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest(`.${s.sidebarWrapper}`) && !e.target.closest(`.${s.menuButton}`)) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [isMenuOpen])

  if (isLoading) {
    return <p>Cargando...</p>
  }

  if (error) {
    return <p className='text-danger'>Error: {error}</p>
  }

  return (
    <div className={s.pageContainer}>
      {/* Botón hamburguesa */}
      <button
        className={s.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label='Toggle menu'
      >
        <ion-icon name={isMenuOpen ? 'close-outline' : 'menu-outline'} />
      </button>

      <div className={s.mainContainer}>
        {/* Sidebar con clase menuOpen condicional */}
        <aside className={`${s.sidebarWrapper} ${isMenuOpen ? s.menuOpen : ''}`}>
          <SideNavigation />
        </aside>

        {/* Contenido principal */}
        <main className={s.contentSection}>
          {!barbers.length
            ? (
              <p>No se encontraron barberos.</p>
              )
            : (
              <div className={s.findedClientsMainContainer}>
                <ul className={s.findedClientsList}>
                  {barbers.map((barber) => (
                    <div
                      key={barber.idBarber}
                      className={s.barberCard}
                    >
                      <div className='flex-grow-1 me-5'>
                        <li className={s.name}>{barber.name}</li>
                        <small className='text-muted'>
                          Teléfono: {barber.phone} <br />  Estado: {barber.state}
                        </small>
                      </div>
                      <div className={s.actions}>
                        <button
                          className={s.detailButton}
                          onClick={() => alert(`Details for ${barber.name}`)}
                        >
                          Detalles
                        </button>
                        <button
                          className={s.deleteButton}
                          onClick={() => onDelete(barber.idBarber)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>
              )}
        </main>
      </div>
    </div>
  )
}

export default Barbers
