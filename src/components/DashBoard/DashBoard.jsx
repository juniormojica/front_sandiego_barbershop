import BarberTable from '../BarberTable/BarberTable'
import SideNavigation from '../SideNavigation/SideNavigation'
import s from './DashBoard.module.css'
import CompanyLogo from '../Company/CompanyLogo'
export default function DashBoard () {
  return (
    <div>
      <div>
        <CompanyLogo fontColor='blue' />
      </div>
      <section className='container'>
        <section className={`${s.registerMainContainer}`}>
          <div className={`shadow p-3 bg-body-tertiary rounded ${s.sidebarMainContainer}`}>
            <SideNavigation />
          </div>
          <div className={s.barberTableContainer}>
            <BarberTable barberName='Junior' />
            <BarberTable barberName='Santiago' />
            <BarberTable barberName='Miguel' />
          </div>
        </section>
      </section>
    </div>
  )
}
