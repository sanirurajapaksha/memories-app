import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "../Redux/reducers/combine";
import postReducer from "../Redux/reducers/postReducers";

const initialState = [];

export const store = configureStore({
  reducer: postReducer,
  preloadedState: initialState,
});
