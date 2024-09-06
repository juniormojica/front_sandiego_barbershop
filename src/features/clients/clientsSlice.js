import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchClients= createAsyncThunk('clients/fetchClients', async () => {
  const response = await axios.get('http://localhost:3000/clients');
  return response.data.data; // devuelve los datos que se manejarán en el slice
})
const initialState = {
  data: [],
    status: 'idle', // Puede ser 'idle', 'loading', 'succeeded', 'failed'
    error: null
}
export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers :{
    getAllClient:(state)=>{
      return state.data
    }
  },
  extraReducers:(builder)=>{
    builder
    .addCase(fetchClients.pending,state =>{
      state.status = 'loading'
    })
    .addCase(fetchClients.fulfilled,(state,action) =>{
      state.status = 'succeded'
      state.data= action.payload
    })
    .addCase(fetchClients.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    })
  }
})

export  const {getAllClient,setClients} = clientsSlice.actions

export default clientsSlice.reducer