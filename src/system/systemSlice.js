import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSidebar: false,
};

const systemSlice = createSlice({
  name: "system",
  initialState,
  reducers: {
    setSidebarShow: (state, { payload = false }) => {
      state.showSide = payload;
    },
  },
});

const { reducer, actions } = systemSlice;

export const { setSidebarShow } = actions;

export default reducer;
