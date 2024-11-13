import SignInButton from '../Buttons/SignInButton'
import SignUpButton from '../Buttons/SingUpButton'
import CompanyLogo from '../Company/CompanyLogo'
import SignIn from '../SignIn/SignIn'
import s from './Landing.module.css'
export default function Landing () {
  return (
    <section className={`${s.landingContainer} container`}>
      <header className={s.headerContainer}>
        <div>
          <CompanyLogo />
        </div>

        <div className={s.sign}>
          <SignUpButton variant='signInBlue' />
          <SignInButton variant='signInBlue' />
        </div>
      </header>
      <div className={s.landingMainContainer}>
        <section className={s.sloganContainer}>
          <div className={s.companytextMissionContainer}>
            <h1 className={s.companyMisionText}>
              Sistema de Gestión para Barberías
            </h1>
            <p className={s.companySloganText}>
              Todo lo que Necesitas para Gestionar tu Barbería en
              un Solo Lugar
            </p>
          </div>

          <div className={s.SignInLandingContainer}>
            <SignIn variant='singInLanding' />
          </div>
        </section>
      </div>
    </section>
  )
}
