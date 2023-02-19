import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./pages/admin-user/adminUserSlice";

const store = configureStore({
  reducer: {
    adminInfo: adminReducer,
  },
});

export default store;
