import { configureStore } from "@reduxjs/toolkit";

import adminReducer from "./pages/admin-user/adminUserSlic";
import systemReducer from "./system/systemSlice";
const store = configureStore({
  reducer: {
    adminInfo: adminReducer,
    system: systemReducer,
  },
});

export default store;
