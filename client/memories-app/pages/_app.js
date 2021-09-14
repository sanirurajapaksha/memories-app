import "../styles/globals.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import combineReducers from "../Redux/reducers/combine";

function MyApp({ Component, pageProps }) {
  const store = configureStore(combineReducers);
  return (
    <Provider store={store}>
      <Component {...pageProps} />;
    </Provider>
  );
}

export default MyApp;
