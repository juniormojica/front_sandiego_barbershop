import s from './CompanyLogo.module.css'
import { Link } from 'react-router-dom'
export default function CompanyLogo({ margin, fontColor = '' }) {
  return (
    <Link to={'/'}>
      <div className={s.logoContainer}>
        <p className={`${s.logoText} ${s[margin]} ${s[fontColor]}`}>ControlBarberShop</p>
      </div>
    </Link>


  )
}