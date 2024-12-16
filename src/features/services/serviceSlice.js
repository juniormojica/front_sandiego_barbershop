import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const BASE_URL = import.meta.env.VITE_BASE_URL

// Async thunk for fetching services
export const fetchServices = createAsyncThunk(
  'services/fetchServices',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${BASE_URL}/services`)
      const data = await response.json()

      if (data.error) {
        return rejectWithValue(data.error)
      }

      return data.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Async thunk for adding a service
export const addService = createAsyncThunk(
  'services/addService',
  async (serviceData, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/services`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(serviceData)
      })

      const result = await response.json()

      if (result.error) {
        return rejectWithValue(result.error)
      }

      // Refetch services after successful addition
      dispatch(fetchServices())
      return result.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Async thunk for updating a service
export const updateService = createAsyncThunk(
  'services/updateService',
  async ({ id, serviceData }, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/services/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(serviceData)
      })

      const result = await response.json()

      if (result.error) {
        return rejectWithValue(result.error)
      }

      // Refetch services after successful update
      dispatch(fetchServices())
      return result.data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Async thunk for deleting a service
export const deleteService = createAsyncThunk(
  'services/deleteService',
  async (id, { rejectWithValue, dispatch }) => {
    try {
      const response = await fetch(`${BASE_URL}/services/${id}`, {
        method: 'DELETE'
      })

      const result = await response.json()

      if (result.error) {
        return rejectWithValue(result.error)
      }

      // Refetch services after successful deletion
      dispatch(fetchServices())
      return id
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

// Services slice
const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    services: [],
    selectedService: null,
    isLoading: false,
    error: null
  },
  reducers: {
    setSelectedService: (state, action) => {
      state.selectedService = action.payload
    }
  },
  extraReducers: (builder) => {
    // Fetch Services
    builder.addCase(fetchServices.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      state.isLoading = false
      state.services = action.payload
    })
    builder.addCase(fetchServices.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    // Add Service
    builder.addCase(addService.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(addService.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(addService.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    // Update Service
    builder.addCase(updateService.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(updateService.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(updateService.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })

    // Delete Service
    builder.addCase(deleteService.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(deleteService.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(deleteService.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { setSelectedService } = servicesSlice.actions
export default servicesSlice.reducer
