import { configureStore } from "@reduxjs/toolkit";

import adminReducer from "./pages/admin-user/adminUserSlice";
import systemReducer from "./system/systemSlice";
import catReducer from "./pages/category/categorySlice";
import paymentOptionsReducer from "./pages/payment-options/paymentOptionsSlice"
const store = configureStore({
  reducer: {
    adminInfo: adminReducer,
    system: systemReducer,
    category: catReducer,
    paymentOptions: paymentOptionsReducer
  },
});

export default store;
