import s from "./Client.module.css";
import SideNavigation from "../SideNavigation/SideNavigation";
export default function Client() {
  return (
    <>
      <section
        className={`container ${s.clientMainContainer} d-flex flex-column flex-md-row`}
      >
        {/* BARRA DE NAVEGACION LATERAL  */}
        <div
          className={` ${s.sideNavContainer} shadow p-3 mb-5 bg-body-tertiary rounded`}
        >
          <SideNavigation />
        </div>

        {/*BARRA DE BUSQUEDA Y BOTON DE BUSQUEDA */}
        <div className={`d-flex  flex-column  w-100 justify-center ${s.clientsMainContainer}`}>
          <div>
            <h3 className={`m-4`}>Clients</h3>
          </div>

          <div className={`d-flex justify-content-center p-2 align-items-center`}>
            <input
              className={`${s.searchInput} form-control w-sm-60 w-md-40 w-lg-30`}
              type="search"
              placeholder="Andres Estrada"
            />
            <button className={`${s.searchButton}`}>
              <ion-icon name="search-outline"></ion-icon>
            </button>
          </div>

            {/*LISTA DE CLIENTES */}
     
          <section className={`${s.findedClientsMainContainer} mt-3 mr-3`}>
          <div className={`${s.findedClientContainer} `}>
            <ul className={`d-flex flex-column ${s.findedClientsList}`}>
                <div className={`d-flex justify-content-center align-items-center flex-nowrap`}>
                    <li className={`w-75 text-truncate me-5`}>Pedro Perez Peralta</li>
                    <div className={`w-25 d-flex justify-content-end`}>
                        <button className={`${s.detailButton} me-2`}>Detalles</button>
                
                        <button className={`${s.deleteButton}`}>Eliminar</button>
                    </div>
                </div>

                <div className={`d-flex justify-content-center align-items-center flex-nowrap`}>
                    <li className={`w-75 text-truncate  me-5`}>Pedro Perez Peralta</li>
                    <div className={`w-25 d-flex justify-content-end`}>
                        <button className={`${s.detailButton} me-2`}>Detalles</button>
                     
                        <button className={`${s.deleteButton}`}>Eliminar</button>
                    </div>
                </div>


                <div className={`d-flex justify-content-center align-items-center flex-nowrap`}>
                    <li className={`w-75 text-truncate me-5`}>Pedro Perez Peralta</li>
                    <div className={`w-25 d-flex justify-content-end`}>
                        <button className={`${s.detailButton} me-2`}>Detalles</button>
                        
                        <button className={`${s.deleteButton}`}>Eliminar</button>
                    </div>
                </div>


               
        
            </ul>
          </div>
        </section>
        </div>

       

       
      </section>
     
    </>
  );
}
