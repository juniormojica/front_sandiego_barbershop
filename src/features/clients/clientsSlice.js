import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = []
export const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers :{
    getAllClient:(state,action)=>{
      return state
    },
    setClients:(state,action)=>{
      return action.payload
    }
  }
})

export  const {getAllClient,setClients} = clientsSlice.actions

export default clientsSlice.reducer