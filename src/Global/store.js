import { configureStore } from "@reduxjs/toolkit";
import myReducer from "./MainGlobal";
import myInputReducer from "./InputReducer";
import myBackReducer from "./backReducer";

export const store = configureStore({
  reducer: { myReducer, myInputReducer, myBackReducer },
});
