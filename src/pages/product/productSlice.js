import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    requestPending: (state, action) => {
      state.isLoading = true;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = productSlice;

export const { requestPending, setProducts } = actions;

export default reducer;
