import React from 'react';
import A from "./A";
import Head from "next/head";

const MainContainer = ({children, keywords}) => {
  return (
    <>
      <Head>
        <meta keywords={`mukaz, next.js ${keywords}`}></meta>
        <title>NextJS</title>
      </Head>
      <div className="navbar">
        <A href="/" text="Главная"/>
        <A href="/users" text="Пользователи"/>
      </div>
      <div>
        {children}
      </div>
      <style jsx>
        {`
          .navbar {
            background: orange;
            padding: 15px;
            margin-bottom: 10px;
          }
        `}
      </style>
    </>
  );
};

export default MainContainer;