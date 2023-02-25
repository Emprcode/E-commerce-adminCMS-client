import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSideBar: false,
};

const adminSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setSideBarShow: (state, { payload = false }) => {
      state.showSideBar = payload;
    },
  },
});

const { reducer, actions } = adminSlice;

export const { setSideBarShow } = actions;

export default reducer;
