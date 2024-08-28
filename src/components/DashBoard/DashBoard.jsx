import BarberTable from "../BarberTable/BarberTable"
import s from './DashBoard.module.css'
export default function DashBoard() {
  return (
    <>
      <h1>DashBoard</h1>
      <section className={s.registerMainContainer}>
        <BarberTable />
        <BarberTable />
        <BarberTable />
      </section>

    </>

  )
}