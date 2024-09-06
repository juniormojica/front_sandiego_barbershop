import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "../features/clients/clientsSlice";
const store = configureStore({
  reducer: {
    clients: clientsReducer,
  },
});

export default store;
