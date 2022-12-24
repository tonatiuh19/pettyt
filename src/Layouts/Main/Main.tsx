import Head from "next/head";
import React from "react";
import { MainLayout } from "../../interfaces/MainLayout.interface";
import styles from "./Main.module.css";

const Main = ({ children, headers }: MainLayout) => {
  return (
    <>
      <Head>
        <title>{headers.title}</title>
        <meta name="description" content={headers.content} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>{children}</main>
    </>
  );
};

export default Main;
