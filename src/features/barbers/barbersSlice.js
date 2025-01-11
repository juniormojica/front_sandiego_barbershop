import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const BASE_URL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000'
console.log(BASE_URL)

// Async thunk for fetching barbers
export const fetchBarbers = createAsyncThunk(
  'barbers/fetchBarbers',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/barbers`)
      console.log('Fetch response:', response)

      if (!response.ok) {
        throw new Error('Server Error')
      }

      const result = await response.json()
      console.log('Fetch result:', result)

      // Devolver directamente el array de datos sin transformación
      return result.data
    } catch (error) {
      console.error('Fetch error:', error)
      return rejectWithValue(error.message)
    }
  }
)

// Async thunk para agregar un barbero
export const addBarber = createAsyncThunk(
  'barbers/addBarber',
  async (barberData, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/barbers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(barberData)
      })

      if (!response.ok) {
        throw new Error('Failed to add barber')
      }

      const result = await response.json()

      // Refetch barbers after successful addition
      dispatch(fetchBarbers())
      return result
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Async thunk for deleting a barber
export const deleteBarber = createAsyncThunk(
  'barbers/deleteBarber',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/barbers/${id}`, {
        method: 'PATCH'
      })

      if (!response.ok) {
        throw new Error('Failed to delete barber')
      }

      // Refetch barbers after successful deletion
      dispatch(fetchBarbers())
      return id
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const toggleBarberState = createAsyncThunk(
  'barbers/toggleBarberState',
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/barbers/${id}/toggle`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error('Error al cambiar el estado del barbero')
      }

      const data = await response.json()
      return { id, message: data.message }
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Barbers slice
const barbersSlice = createSlice({
  name: 'barbers',
  initialState: {
    barbers: [],
    isLoading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    // Fetch Barbers
    builder.addCase(fetchBarbers.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(fetchBarbers.fulfilled, (state, action) => {
      state.isLoading = false
      state.barbers = action.payload
    })
    builder.addCase(fetchBarbers.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload || 'Failed to fetch barbers'
    })

    // Add Barber
    builder.addCase(addBarber.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(addBarber.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(addBarber.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload || 'Failed to add barber'
    })

    // Delete Barber
    builder.addCase(deleteBarber.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(deleteBarber.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(deleteBarber.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload || 'Failed to delete barber'
    })
    builder.addCase(toggleBarberState.fulfilled, (state, action) => {
      const barber = state.barbers.find((b) => b.idBarber === action.payload.id)
      if (barber) {
        barber.state = barber.state === 'active' ? 'inactive' : 'active'
      }
    })
  }
})

export default barbersSlice.reducer
