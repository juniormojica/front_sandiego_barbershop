import BarberTable from "../BarberTable/BarberTable"
import SideNavigation from "../SideNavigation/SideNavigation"
import s from './DashBoard.module.css'
import CompanyLogo from "../Company/CompanyLogo"
export default function DashBoard() {
  return (
    <div>
      <div>
      <CompanyLogo fontColor="blue"/>
      </div>
     <section className="container">
      
 
      <section className={s.registerMainContainer}>
        <div className={`${s.sidebarMainContainer}  shadow p-3 mb-5 bg-body-tertiary rounded`}>
        <SideNavigation/>
        </div>
        <div className={s.barberTableContainer}>
        <BarberTable barberName ='Adrian'/>
        <BarberTable barberName ='Santigo'/>
        <BarberTable barberName ='Miguel'/>
        </div>
       

      </section>
 
    </section>
    </div>
   

  )
}