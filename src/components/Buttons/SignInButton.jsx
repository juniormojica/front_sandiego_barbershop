import { Link } from 'react-router-dom'
import s from './SignInButton.module.css'
export default function SignInButton({ variant = 'default' }) {
    const buttonClass = s[variant] || s.default
    return (
        <div className={s.marginSignIn}>
            <Link to="/signin">
                <button className={buttonClass}>Ingresar</button>
            </Link>
        </div>
    )
}
