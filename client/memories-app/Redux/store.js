import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "../Redux/reducers/combine";

export const store = configureStore({
  reducer: combineReducers,
  devTools: true,
});
