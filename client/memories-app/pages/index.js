import React from "react";
import Head from "next/head";
import Header from "../components/header";
import Body from "../components/body";

export default function App() {
  return (
    <div>
      <Head>
        <title>Memories App</title>
        <meta name="description" content="memories app just for fun" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className="flex flex-col w-screen h-screen">
        <Header />
        <Body />
      </div>
    </div>
  );
}
