import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchClients = createAsyncThunk(
    'clients/fetchClients',
    async () => {
        const response = await axios.get('http://localhost:3000/clients')
        return response.data.data // devuelve los datos que se manejarán en el slice
    }
)

export const createClient = createAsyncThunk(
    'clients/createClient',
    async (newClient) => {
        const response = await axios.post(
            'http://localhost:3000/clients',
            newClient
        )
        return response.data.data // Asumiendo que el API devuelve el cliente creado
    }
)

export const deleteClient = createAsyncThunk(
    'clients/deleteClient',
    async (clientId) => {
        await axios.delete(`http://localhost:3000/clients/${clientId}`)
        return clientId // Devuelve el ID del cliente eliminado
    }
)

export const updateClient = createAsyncThunk(
    'clients/updateClient',
    async ({ idClient, name, phone }) => {
        console.log(idClient, name, phone)

        const response = await axios.patch(
            `http://localhost:3000/clients/${idClient}`,
            { name, phone }
        )

        return response.data.data // Asumiendo que el API devuelve el cliente actualizado
    }
)
const initialState = {
    data: [],
    status: 'idle', // Puede ser 'idle', 'loading', 'succeeded', 'failed'
    error: null,
}
export const clientsSlice = createSlice({
    name: 'clients',
    initialState,
    reducers: {
        getAllClient: (state) => {
            return state.data
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchClients.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchClients.fulfilled, (state, action) => {
                state.status = 'succeded'
                state.data = action.payload
            })
            .addCase(fetchClients.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(createClient.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(createClient.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.data.push(action.payload) // Añade el nuevo cliente a la lista de clientes
            })
            .addCase(createClient.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(deleteClient.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Filtra los clientes eliminando el que coincide con el ID
                state.data = state.data.filter(
                    (client) => client.idClient !== action.payload
                )
            })
            .addCase(deleteClient.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(updateClient.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(updateClient.fulfilled, (state, action) => {
                state.status = 'succeeded'
                // Actualiza el cliente en la lista de clientes
                const index = state.data.findIndex(
                    (client) => client.idClient === action.payload.idClient
                )
                if (index !== -1) {
                    state.data[index] = action.payload
                }
            })
            .addCase(updateClient.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    },
})

export const { getAllClient, setClients } = clientsSlice.actions

export default clientsSlice.reducer
