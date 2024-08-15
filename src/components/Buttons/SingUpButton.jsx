import { Link } from 'react-router-dom'
import s from './SignInButton.module.css'
export default function SignUpButton({ variant = 'default' }) {
  const buttonClass = s[variant] || s.default

  return (
    <div className={s.marginSignUp}>
      <Link to='/signup'>
        <button className={buttonClass}>
          Registrate
        </button>
      </Link>

    </div>



  )
}