import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navLinks = [
    { path: '/dashboard', text: 'Dashboard' },
    { path: '/clients', text: 'Clientes' },
    { path: '/barbers', text: 'Barberos' },
    { path: '/personal-info', text: 'Información Personal' },
    { path: '/settings', text: 'Configuración' }
  ]

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        <div className={styles.logoContainer}>
          {/* Aquí puedes agregar tu logo */}
          <span className={styles.logoText}>BarberApp</span>
        </div>

        <button className={styles.menuButton} onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `${styles.navLink} ${isActive ? styles.activeLink : ''}`}
              onClick={() => setIsOpen(false)}
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
