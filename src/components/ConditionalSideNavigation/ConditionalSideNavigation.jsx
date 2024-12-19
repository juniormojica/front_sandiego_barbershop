import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styles from './ConditionalSideNavigation.module.css'
import SideNavigation from '../SideNavigation/SideNavigation'

function ConditionalSideNavigation () {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  // Rutas donde NO se mostrará el SideNavigation
  const hiddenRoutes = ['/', '/signin', '/signup']

  // No mostrar SideNavigation en rutas específicas
  if (hiddenRoutes.includes(location.pathname)) {
    return null
  }

  return (
    <>
      {/* Botón de menú para móviles */}
      <button
        className={styles.menuToggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Cerrar' : 'Menú'}
      </button>

      {/* Navegación para móviles */}
      <div className={`${styles.mobileNavigation} ${isOpen ? styles.open : ''}`}>
        <SideNavigation />
      </div>

      {/* Navegación para escritorio */}
      <div className={styles.desktopNavigation}>
        <SideNavigation />
      </div>
    </>
  )
}

export default ConditionalSideNavigation
