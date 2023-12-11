import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsService from "./productsService";

const initialState = {
  products: [],
  cart:[],
  product:{}
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
    return product
  } catch (error) {
    console.error(error);
  }
});

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.products = action.payload;
    })
    .addCase(addCart.fulfilled,(state,action)=>{
      state.cart= [action.payload,...state.cart]
    })
    .addCase(getById.fulfilled,(state,action)=>{
      state.product= action.payload
    })
  },
});

export default productsSlice.reducer;
