import { useLocation } from 'react-router-dom'
import CompanyLogo from '../Company/CompanyLogo'

function ConditionalCompanyLogo () {
  const location = useLocation()

  // Rutas donde NO se mostrará el CompanyLogo
  const hiddenRoutes = ['/', '/signin', '/signup']

  // No mostrar CompanyLogo en rutas específicas
  if (hiddenRoutes.includes(location.pathname)) {
    return null
  }

  return <CompanyLogo />
}

export default ConditionalCompanyLogo
