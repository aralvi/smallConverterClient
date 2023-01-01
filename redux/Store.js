import { configureStore } from "@reduxjs/toolkit";
import Auth from "@redux/slices/Auth";
import Documents from "@redux/slices/Documents";

const Store = configureStore({
  reducer: {
    auth: Auth,
    documents: Documents,
  },
});

export default Store;
