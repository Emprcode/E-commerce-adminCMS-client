import { configureStore } from "@reduxjs/toolkit";

import adminReducer from "./pages/admin-user/adminUserSlice";
import systemReducer from "./system/systemSlice";
import catReducer from "./pages/category/categorySlice";
import paymentOptionsReducer from "./pages/payment-options/paymentOptionsSlice"
import productReducer from "./pages/product/productSlice";
import itemReducer from "./pages/items/ItemsSlice";
const store = configureStore({
  reducer: {
    adminInfo: adminReducer,
    system: systemReducer,
    category: catReducer,
    paymentOptions: paymentOptionsReducer,
    product: productReducer,
    item : itemReducer 
  },
});

export default store;
