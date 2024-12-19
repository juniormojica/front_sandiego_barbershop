import s from './Client.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react' // Añade useState
import SideNavigation from '../SideNavigation/SideNavigation' // Importa SideNavigation
import { fetchClients } from '../../features/clients/clientsSlice'
import ClientItem from './ClientItem'
import SearchBar from '../searchBar/SearchBar'
import Error from '../Error/Error'
import Loading from '../Loading/Loading'
import CreateClientModal from './CreateClientModal'

export default function Client () {
  const dispatch = useDispatch()
  const [isMenuOpen, setIsMenuOpen] = useState(false) // Añade estado para el menú

  const {
    data: clients,
    status,
    error
  } = useSelector((state) => state.clients)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchClients())
    }
  }, [dispatch, status])

  if (status === 'loading') {
    return <Loading />
  }

  if (status === 'failed') {
    return <Error message={error} />
  }

  return (
    <div className={s.clientPageContainer}>
      {/* Botón hamburguesa para móvil/tablet */}
      <button
        className={s.menuButton}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <ion-icon name={isMenuOpen ? 'close-outline' : 'menu-outline'} />
      </button>

      <div className={`d-flex w-100 flex-md-row justify-center ${s.clientsMainContainer}`}>
        <div>
          <h3 className='m-4'>Clients</h3>
        </div>
        <div>
          <CreateClientModal />
        </div>
      </div>

      <section className={`container ${s.clientMainContainer} d-flex flex-column flex-md-row`}>
        {/* Navegación lateral */}
        <div className={`${s.sidebarWrapper} ${isMenuOpen ? s.menuOpen : ''}`}>
          <SideNavigation />
        </div>

        <section className={s.contentSection}>
          <SearchBar />
          <section className={`${s.findedClientsMainContainer} mt-3 mr-3`}>
            <div className={`${s.findedClientContainer}`}>
              <ul className={`d-flex flex-column ${s.findedClientsList}`}>
                {clients.map((client) => (
                  <ClientItem
                    key={client.idClient}
                    name={client.name}
                    idClient={client.idClient}
                    phone={client.phone}
                  />
                ))}
              </ul>
            </div>
          </section>
        </section>
      </section>
    </div>
  )
}
