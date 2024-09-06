import s from './Client.module.css'
import SideNavigation from '../SideNavigation/SideNavigation'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import { fetchClients } from '../../features/clients/clientsSlice'
import ClientItem from './ClientItem'
import SearchBar from '../searchBar/SearchBar'
import Error from '../Error/Error'
import Loading from '../Loading/Loading'
import CreateClientModal from './CreateClientModal'

export default function Client() {

  const [showModal, setShowModal] = useState(false)
  const dispatch = useDispatch()

  const { data: clients, status, error } = useSelector(state => state.clients)

  const ToogleShowModal = () => {
    setShowModal(!modal)
  }

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchClients());
    }
  }, [dispatch, status])

  if (status === 'loading') {
    return <Loading />
  }

  if (status === 'failed') {
    return <Error message={error} />
  }

  return (
    <>
      <div className={`d-flex    w-100 flex-md-row justify-center ${s.clientsMainContainer}`}>
        <div>
          <h3 className='m-4'>Clients</h3>
        </div>
        <div>
          <CreateClientModal />
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


                {clients.map(client => <ClientItem key={client.idClient} name={client.name} />)}


              </ul>
            </div>
          </section>
        </section>

      </section>


    </>
  )
}
