import BarberTable from "../BarberTable/BarberTable"
import s from './DashBoard.module.css'
export default function DashBoard() {
  return (
    <section className="container">
      <h1>DashBoard</h1>
      <section className={s.registerMainContainer}>
        <BarberTable barberName ='Adrian'/>
        <BarberTable barberName ='Santigo'/>
        <BarberTable barberName ='Miguel'/>

      </section>
 
    </section>

  )
}