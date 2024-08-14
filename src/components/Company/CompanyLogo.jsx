import s from './CompanyLogo.module.css'
export default function CompanyLogo({ margin }) {
  return (
    <div className={s.logoContainer}>
      <p className={`${s.logoText} ${s[margin]}`}>ControlBarberShop</p>
    </div>

  )
}