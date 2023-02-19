import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./pages/admin-user/adminUserSlice";
import systemReducer from "./system/systemSlice";

const store = configureStore({
  reducer: {
    admin: adminReducer,
    system: systemReducer,
  },
});

export default store;
