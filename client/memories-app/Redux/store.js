import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import combineReducers from "../Redux/reducers/combine";

export const store = configureStore({
  reducer: combineReducers,
  devTools: true,
  middleware: [thunk],
});
