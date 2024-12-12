import { Link } from 'react-router-dom'
import s from './Footer.module.css'

export default function Footer () {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.logo}>
          <h2>BarberControl</h2>
        </div>
        <nav className={s.nav}>
          <Link to='/about' className={s.link}>
            Sobre Nosotros
          </Link>
          <Link to='/services' className={s.link}>
            Servicios
          </Link>
          <Link to='/contact' className={s.link}>
            Contacto
          </Link>
          <Link to='/privacy' className={s.link}>
            Política de Privacidad
          </Link>
        </nav>
        <div className={s.copy}>
          <p>&copy; {new Date().getFullYear()} BarberControl. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
