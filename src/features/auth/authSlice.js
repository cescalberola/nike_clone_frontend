import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

const user = JSON.parse(localStorage.getItem("user"));
const token = JSON.parse(localStorage.getItem("token"));

const initialState = {
    user: user || null,
    token: token || null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.message = "";
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.message = action.payload.message;
            })
            .addCase(register.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload;
            });
    }
});

export const register = createAsyncThunk(
    "auth/register",
    async (formData, thunkAPI) => {
        try {
            return await authService.register(formData);
        } catch (error) {
            console.error(error);
            const message = error.response.data.messages[0];
            return thunkAPI.rejectWithValue(message); //action.payload del rejected
        }
    }
);

export default authSlice.reducer;