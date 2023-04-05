import React from "react";
import Head from "next/head";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import styles from "./About.module.css";

const About: React.FC = () => {
  return (
    <>
      <Head>
        <title>自己紹介 - ポートフォリオ</title>
        <meta name="description" content="自己紹介ページ" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.container}>
          <h1 className={styles.title}>自己紹介</h1>
          <p className={styles.intro}>
            こんにちは!私は、プニプニです。ウェブ開発に興味があり、特にフロントエンド技術に熱心に取り組んでいます。私のスキルセットには、React、Next.js、TypeScriptなどが含まれます。
          </p>
          {/* 自己紹介の詳細を追加 */}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
