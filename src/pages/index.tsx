import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import styles from "../../styles/Home.module.scss";

const Home: NextPage = () => {
  const [text, setText] = useState("");
  const handleTextChange = (event: any) => {
    setText(event.target.value);
  };
  const handleSubmit = () => {
    console.log(text);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>nyanchu-megaphone</div>
      <input type="text" value={text} onChange={handleTextChange} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Home;
