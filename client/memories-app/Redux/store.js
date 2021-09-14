import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "../Redux/reducers/combine";

const initialState = [];

export const store = configureStore({
  reducer: combineReducers,
});
