import { configureStore } from '@reduxjs/toolkit'
import clientsReducer from '../features/clients/clientsSlice'
import servicesReducer from '../features/services/serviceSlice'
const store = configureStore({
  reducer: {
    clients: clientsReducer,
    services: servicesReducer
  }
})

export default store
