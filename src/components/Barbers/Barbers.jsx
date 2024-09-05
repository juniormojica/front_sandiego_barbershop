import s from './Barbers.module.css'
import SideNavigation from '../SideNavigation/SideNavigation'
export default function Barbers() {
  return (
    <>
      <section
        className={`container ${s.clientMainContainer}  d-flex flex-column flex-md-row`}
      >
        {/* BARRA DE NAVEGACION LATERAL  */}
        <div
          className={` ${s.sideNavContainer} shadow p-3 mb-5 bg-body-tertiary rounded`}
        >
          <SideNavigation />
        </div>

        {/* BARRA DE BUSQUEDA Y BOTON DE BUSQUEDA */}
        <div
          className={`d-flex  flex-column  w-100 justify-center ${s.clientsMainContainer}`}
        >
          <div>
            <h3 className='m-4'>Barbers</h3>
          </div>

          <div className='d-flex justify-content-center p-2 align-items-center'>
            <input
              className={`${s.searchInput} form-control w-sm-60 w-md-40 w-lg-30`}
              type='search'
              placeholder='Junior Mojica'
            />
            <button className={`${s.searchButton}`}>
              <ion-icon name='search-outline' />
            </button>
          </div>

          {/* LISTA DE CLIENTES */}

          <section className={`${s.findedClientsMainContainer} mt-3 mr-3`}>
            <div className={`${s.findedClientContainer} `}>
              <ul className={`d-flex flex-column ${s.findedClientsList} `}>
                <div className='d-flex justify-content-between align-items-center '>
                  <li
                    className={`text-truncate flex-grow-1 me-5 ${s.name} fs-6`}
                  >
                    Adrian Estrada
                  </li>
                  <div className=' d-flex justify-content-end'>
                    <button className={`${s.detailButton} me-2`}>
                      Detalles
                    </button>

                    <button className={`${s.deleteButton}`}>Eliminar</button>
                  </div>
                </div>

                <div className='d-flex justify-content-center align-items-center '>
                  <li
                    className={`text-truncate flex-grow-1 me-5 ${s.name} fs-6`}
                  >
                    Miguel Orozo
                  </li>
                  <div className='w-25 d-flex justify-content-end'>
                    <button className={`${s.detailButton} me-2`}>
                      Detalles
                    </button>

                    <button className={`${s.deleteButton}`}>Eliminar</button>
                  </div>
                </div>

                <div className='d-flex justify-content-center align-items-center '>
                  <li
                    className={`text-truncate flex-grow-1 me-5 ${s.name} fs-6`}
                  >
                    Santiago Rojas
                  </li>
                  <div className='w-50 d-flex justify-content-end'>
                    <button className={`${s.detailButton} me-2`}>
                      Detalles
                    </button>

                    <button className={`${s.deleteButton}`}>Eliminar</button>
                  </div>
                </div>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </>
  )
}
