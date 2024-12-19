import { configureStore } from '@reduxjs/toolkit'
import clientsReducer from '../features/clients/clientsSlice'
import servicesReducer from '../features/services/serviceSlice'
import barbersReducer from '../features/barbers/barbersSlice'
const store = configureStore({
  reducer: {
    clients: clientsReducer,
    services: servicesReducer,
    barbers: barbersReducer
  }
})

export default store
