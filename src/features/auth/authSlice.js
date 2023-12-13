import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
    user: user || null,
    token: token || null,
    registered: false,
    notRegistered: false
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
        },
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
        },
        resetRegister: (state) => {
            state.registered = false;
            state.notRegistered = false;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(checkEmail.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(checkEmail.fulfilled, (state, action) => {
                if (action.payload.registered) {
                    state.registered = true
                } else {
                    state.notRegistered = true
                }
                console.log(action.payload.registered)
                state.status = 'succeeded';
                // Handle the action.payload as needed, e.g., setUser(action.payload)
            })
            .addCase(checkEmail.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.message = action.payload.message;
            })
            .addCase(register.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isSuccess = true;
                state.message = action.payload.message;
            })
            .addCase(login.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload;
            })
    }
});

export const checkEmail = createAsyncThunk(
    "auth/checkEmail",
    async (data) => {
        try {
            // console.log(data)
            return await authService.checkEmail(data);
        } catch (error) {
            console.error(error);
            const message = error.response.data.messages[0];
            return thunkAPI.rejectWithValue(message); //action.payload del rejected
        }
    }
);
export const register = createAsyncThunk(
    "auth/register",
    async (data, thunkAPI) => {
        try {
            return await authService.register(data);
        } catch (error) {
            console.error(error);
            const message = error.response.data.messages[0];
            return thunkAPI.rejectWithValue(message); //action.payload del rejected
        }
    }
);
export const login = createAsyncThunk(
    "auth/login",
    async (data, thunkAPI) => {
        try {
            return await authService.login(data);
        } catch (error) {
            console.error(error);
            const message = error.response.data.message;
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const { reset, setUser, clearUser, resetRegister } = authSlice.actions;
export default authSlice.reducer;