import { useState } from 'react'
import BarberTable from '../BarberTable/BarberTable'
import s from './DashBoard.module.css'
import SideNavigation from '../SideNavigation/SideNavigation'

export default function DashBoard () {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className={s.dashboardContainer}>
      {/* Botón hamburguesa para móvil/tablet */}
      <button
        className={s.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <ion-icon name={isMenuOpen ? 'close-outline' : 'menu-outline'} />
      </button>

      <section className={s.registerMainContainer}>
        {/* Navigation sidebar con clase condicional para móvil */}
        <div className={`${s.sidebarWrapper} ${isMenuOpen ? s.menuOpen : ''}`}>
          <SideNavigation />
        </div>

        <div className={s.barberTableContainer}>
          <BarberTable barberName='Junior' />
          <BarberTable barberName='Santiago' />
          <BarberTable barberName='Miguel' />
        </div>
      </section>
    </div>
  )
}
