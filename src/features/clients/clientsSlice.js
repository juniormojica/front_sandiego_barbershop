import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  status: 'idle'
}
export const clientsSlice = createSlice({
  name: 'clients',
  initialState
})
