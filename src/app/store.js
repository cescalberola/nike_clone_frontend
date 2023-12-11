import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";
import products from "../features/products/productsSlice";

export const store = configureStore({
  reducer: {
    auth,
    products,
  },
});
