import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "../Redux/reducers/combine";
import postReducers from "../Redux/reducers/postReducers";

const initialState = [];

export const store = configureStore({
  reducer: postReducers,
  preloadedState: initialState,
});
