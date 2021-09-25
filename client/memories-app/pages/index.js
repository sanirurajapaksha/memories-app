import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../Redux/actions/postActions";
import Head from "next/head";
import Header from "../components/header";
import Body from "../components/body";

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div>
      <Head>
        <title>Memories App</title>
        <meta name="description" content="memories app just for fun!" />
        <link rel="icon" href="favicon.ico" />
      </Head>

      <Header />
      <Body />
    </div>
  );
}
