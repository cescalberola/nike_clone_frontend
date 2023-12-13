import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsService from "./productsService";

const cart = JSON.parse(localStorage.getItem("cart"));

const initialState = {
  products: [],
  cart: cart || [],
  product: {},
};

export const getAll = createAsyncThunk("products/getAll", async () => {
  try {
    return await productsService.getAll();
  } catch (error) {
    console.error(error);
  }
});
export const getById = createAsyncThunk("products/getById", async (_id) => {
  try {
    return await productsService.getById(_id);
  } catch (error) {
    console.error(error);
  }
});
export const addCart = createAsyncThunk("products/addCart", async (product) => {
  try {
    return product;
  } catch (error) {
    console.error(error);
  }
});
export const clearCart = createAsyncThunk("products/clearCart", async () => {
  try {
    return null;
  } catch (error) {
    console.error(error);
  }
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAll.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(addCart.fulfilled, (state, action) => {
        state.cart = [action.payload, ...state.cart];
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.product = action.payload;
      })
      .addCase(clearCart.fulfilled, (state, action) => {
        state.cart = null;
      });
  },
});

export default productsSlice.reducer;
