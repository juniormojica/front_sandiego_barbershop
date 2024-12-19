import BarberTable from '../BarberTable/BarberTable'
import s from './DashBoard.module.css'

export default function DashBoard () {
  return (
    <div>

      <section>
        <section className={`${s.registerMainContainer}`}>
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
