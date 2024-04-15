import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import $host from '../http'

const isError = (action) => {
    return action.type.endsWith('rejected');
}

const initialState = {
    services: [],
    completed: '',
    error: false,
    loading: true
}

export const getServices = createAsyncThunk (
    'services/getServices',
    async function (_, { rejectWithValue }) {
        try {
            const {data} = await $host.get('/services/')
            return data
        } catch (e){
            return rejectWithValue(e.response.data.message)
        }
    }
)

export const editServices = createAsyncThunk (
    'services/editServices',
    async function ([id, title, price, price_medium, price_high, service_time], { rejectWithValue }) {
        try {         
            const {data} = await $host.post('/services/', {id, title, price, price_medium, price_high, service_time})
            return data
        } catch (e){
            return rejectWithValue(e.response.data.message)
        }
    }
)

export const deleteServices = createAsyncThunk (
    'services/deleteServices',
    async function (id, { rejectWithValue }) {
        try {    
            const {data} = await $host.post('/services/delete', {id})

            return data
        } catch (e){
            return rejectWithValue(e.response.data.message)
        }
    }
)

export const addServices = createAsyncThunk (
    'services/addServices',
    async function ([title, price, price_medium, price_high, service_time], { rejectWithValue }) {
        try {
            const {data} = await $host.post('/services/add', {title, price, price_medium, price_high, service_time})
            return data
        } catch (e){
            return rejectWithValue(e.response.data.message)
        }
    }
)

const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(getServices.pending, (state) => {
                state.loading = true;
            })
            .addCase(getServices.fulfilled, (state, action) => {
                state.services = action.payload;
            })
            .addCase(addServices.pending, (state) => {
                state.loading = true;
                state.completed = 'Идёт проверка...'
            })
            .addCase(addServices.fulfilled, (state, action) => {
                state.completed = "Услуга добавлена успешно!"
                state.services.push(action.payload);
            })
            .addCase(editServices.pending, (state) => {
                state.completed = 'Обновляем данные...'

            })
            .addCase(editServices.fulfilled, (state, action) => {
                state.completed = "Данные обновлены!"
                const toggledService = state.services.find(service => service.id === action.payload.id) 
                if (toggledService) {
                    toggledService.price = action.payload.price
                    toggledService.title = action.payload.title
                    toggledService.price_medium = action.payload.price_medium
                    toggledService.price_high = action.payload.price_high
                    console.log(action.payload.service_time)
                    toggledService.time = action.payload.service_time
                } 
            })
            .addCase(deleteServices.pending, (state) => {
                state.loading = true;
                state.completed = 'Удаляем услугу...'
            })
            .addCase(deleteServices.fulfilled, (state, action) => {
                state.loading = false;
                state.completed = "Услуга удалена!"
                state.services = state.services.filter(service => service.id !== action.payload);
            })
            .addMatcher(isError, (state, action) => {
                state.error = true;
                state.completed = 'Возникла ошибка!'
              })

    }
})

export default servicesSlice.reducer

export const { logout } = servicesSlice.actions

    
