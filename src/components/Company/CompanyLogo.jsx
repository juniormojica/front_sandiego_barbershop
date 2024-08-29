import s from './CompanyLogo.module.css'
import { Link } from 'react-router-dom'
export default function CompanyLogo({ margin=0, fontColor = '' }) {
  return (
    
    <Link to={'/'} className='text-decoration-none container'>
      <div className={s.logoContainer}>
        <p className={`${s.logoText} ${s[margin]} ${s[fontColor]}`}>ControlBarberShop</p>
      </div>
    </Link>


  )
}