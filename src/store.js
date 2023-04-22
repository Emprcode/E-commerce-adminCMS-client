import { configureStore } from "@reduxjs/toolkit";

import adminReducer from "./pages/admin-user/adminUserSlice";
import systemReducer from "./system/systemSlice";
import catReducer from "./pages/category/categorySlice";
import paymentOptionsReducer from "./pages/payment-options/paymentOptionsSlice"
import ProductReducer from "./pages/product/productSlice";
const store = configureStore({
  reducer: {
    adminInfo: adminReducer,
    system: systemReducer,
    category: catReducer,
    paymentOptions: paymentOptionsReducer,
    product: ProductReducer,
    // item : itemReducer 
  },
});

export default store;
