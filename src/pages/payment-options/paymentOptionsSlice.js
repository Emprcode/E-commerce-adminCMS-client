import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paymentOption: [],
  isLoading: false,
};

const paymentOptionsSlice = createSlice({
  name: "paymentOptions",
  initialState,
  reducers: {
    requestPending: (state) => {
      state.isLoading = true;
    },
    setPaymentOption: (state, action) => {
      //   if (!state.paymentOption.length && !action.payload.length) return;
      state.paymentOption = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer, actions } = paymentOptionsSlice;

export const { setPaymentOption, requestPending } = actions;

export default reducer;
