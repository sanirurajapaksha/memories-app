import React from "react";
import { wrapper } from "../redux/store";
import "../styles/globals.css";
import App from "next/app";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

export default wrapper.withRedux(MyApp);
