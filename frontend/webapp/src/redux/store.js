import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import companyReducer from "./company";

export const store = configureStore({
  reducer: {
    user: userReducer,
    company: companyReducer,
  },
});
