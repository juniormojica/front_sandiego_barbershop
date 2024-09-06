import s from './Client.module.css'
import SideNavigation from '../SideNavigation/SideNavigation'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { setClients } from '../../features/clients/clientsSlice'
import ClientItem from './ClientItem'
import SearchBar from '../searchBar/SearchBar'
import axios from 'axios'
export default function Client() {

  const dispatch = useDispatch()

  const fetchClients = async () => {
    const response = await axios.get('http://localhost:3000/clients')
    const data = response.data.data
    dispatch(setClients(data))
    console.log(data);
  }

  useEffect(() => {
    fetchClients()
  }, [dispatch])

  const clients = useSelector(state => { return state.clients })
  return (
    <>
      <div className={`d-flex  flex-column  w-100 justify-center ${s.clientsMainContainer}`}>
        <div>
          <h3 className='m-4'>Clients</h3>
        </div>
      </div>
      <section className={`container ${s.clientMainContainer} d-flex flex-column flex-md-row`}>

        {/* BARRA DE NAVEGACION LATERAL  */}
        <div className={` ${s.sideNavContainer} shadow p-3 mb-5 bg-body-tertiary rounded`}>
          <SideNavigation />
        </div>
        <section>

          {/* BARRA DE BUSQUEDA Y BOTON DE BUSQUEDA */}
          <SearchBar />
          {/* LISTA DE CLIENTES */}
          <section className={`${s.findedClientsMainContainer} mt-3 mr-3`}>
            <div className={`${s.findedClientContainer} `}>
              <ul className={`d-flex flex-column ${s.findedClientsList}`}>

                {(clients.length === 0)
                  ? (<h3>No hay Clientes para mostrar</h3>)
                  : (
                    clients.map(client => <ClientItem key={client.idClient} name={client.name} />)
                  )}

              </ul>
            </div>
          </section>
        </section>

      </section>


    </>
  )
}
