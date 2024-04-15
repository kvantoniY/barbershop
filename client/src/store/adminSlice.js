import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import $host from '../http'

const isError = (action) => {
    return action.type.endsWith('rejected');
}

const initialState = {
    list: [],
    completed: '',
    error: null,
    auth: false
}

export const adminLogin = createAsyncThunk (
    'admin/adminLogin',
    async function ([login, password], { rejectWithValue }) {
        try {
            const {data} = await $host.post('/admin/login', {login, password})
            return data
        } catch (e){
            return rejectWithValue(e.response.data.message)
        }
    }
)
export const adminRegistration = createAsyncThunk (
    'admin/adminRegistration',
    async function ([login, password], { rejectWithValue }) {
        try {
            const {data} = await $host.post('/admin/registration', {login, password})
            return data
        } catch (e){
            return rejectWithValue(e.response.data.message)
        }
    }
)

const adminSlice = createSlice({
    name: 'admin',
    initialState,
    reducers: {
        logout(state) {
            state.auth = false
            state.completed = ''
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(adminLogin.pending, (state) => {
                state.completed = 'Идёт проверка...'
            })
            .addCase(adminLogin.fulfilled, (state) => {
                state.completed = "Авторизация успешна"
                state.auth = true
                localStorage.setItem("auth", true);
            })
            .addCase(adminRegistration.pending, (state) => {
                state.completed = 'Идёт проверка...'
            })
            .addCase(adminRegistration.fulfilled, (state) => {
                state.completed = "Регистрация успешна"
                state.auth = true
            })
            .addMatcher(isError, (state, action) => {
                state.error = action.payload;
                state.auth = false
              });
    }
})

export default adminSlice.reducer

export const { logout } = adminSlice.actions

    
