import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import $host from '../http'

const isError = (action) => {
    return action.type.endsWith('rejected');
}

const initialState = {
    masters: [],
    completed: '',
    error: null,
}

export const addMasters = createAsyncThunk (
    'masters/addMasters',
    async function (formData, { rejectWithValue }) {
        try {
            const {data} = await $host.post('/masters/', formData)
            return data
        } catch (e){
            return rejectWithValue(e.response.data.message)
        }
    }
)

export const getMasters = createAsyncThunk (
    'masters/getMasters',
    async function (_, { rejectWithValue }) {
        try {
            const {data} = await $host.get('/masters/')
            return data
        } catch (e){
            return rejectWithValue(e.response.data.message)
        }
    }
)

export const editMasters = createAsyncThunk (
    'masters/editMasters',
    async function (formData, { rejectWithValue }) {
        try {
            const {data} = await $host.post('/masters/edit', formData)
            return data
        } catch (e){
            return rejectWithValue(e.response.data.message)
        }
    }
)

export const deleteMasters = createAsyncThunk (
    'masters/deleteMasters',
    async function (id, { rejectWithValue }) {
        try {
            const {data} = await $host.post('/masters/delete', {id})
            return data
        } catch (e){
            return rejectWithValue(e.response.data.message)
        }
    }
)

const mastersSlice = createSlice({
    name: 'masters',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getMasters.pending, (state) => {

            })
            .addCase(getMasters.fulfilled, (state, action) => {
                state.masters = action.payload;
            })
            .addCase(addMasters.pending, (state, action) => {

            })
            .addCase(addMasters.fulfilled, (state, action) => {
                state.completed = "Мастер добавлен!"
                state.masters.push(action.payload);
            })
            .addCase(editMasters.pending, (state) => {
                state.completed = 'Обновляем данные...'
            })
            .addCase(editMasters.fulfilled, (state, action) => {
                state.completed = "Данные обновлены!"
                const toggledMaster = state.masters.find(master => master.id == action.payload.id) 
                if (toggledMaster) {
                    toggledMaster.name = action.payload.name
                    toggledMaster.second_name = action.payload.second_name
                    toggledMaster.description = action.payload.description
                    toggledMaster.image = action.payload.fileName
                } 
            })
            .addCase(deleteMasters.pending, (state) => {
                state.completed = 'Удаляем мастера...'
            })
            .addCase(deleteMasters.fulfilled, (state, action) => {
                state.completed = "Мастер удален!"
                state.masters = state.masters.filter(master => master.id !== action.payload);
            })
            .addMatcher(isError, (state, action) => {
                state.error = true;
                state.completed = 'Возникла ошибка!'
              });
    }
})

export default mastersSlice.reducer

export const { logout } = mastersSlice.actions

    
