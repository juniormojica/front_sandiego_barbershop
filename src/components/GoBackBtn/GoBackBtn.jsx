import { Link } from 'react-router-dom'
import s from './GoBackBtn.module.css'

const GoBackBtn = ({ path, children }) => {
  return (
    <div className={s.goBackContainer}>
      <Link to={path} className={s.goBackButton}>
        {children}
      </Link>
    </div>
  )
}

export default GoBackBtn
