import React from "react";
import Head from "next/head";
import Header from "../../src/components/Header/Header";
import Footer from "../../src/components/Footer/Footer";
import styles from "./Blog.module.css";

type BlogPost = {
  id: string;
  title: string;
  date: string;
  excerpt: string;
};

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "ブログ記事タイトル1",
    date: "2023-03-01",
    excerpt: "これはブログ記事1の概要です...",
  },
  {
    id: "2",
    title: "ブログ記事タイトル2",
    date: "2023-03-15",
    excerpt: "これはブログ記事2の概要です...",
  },
  // 他のブログ記事データを追加
];

const Blog: React.FC = () => {
  return (
    <>
      <Head>
        <title>ブログ - ポートフォリオ</title>
        <meta name="description" content="ブログ記事一覧" />
      </Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.container}>
          <h1 className={styles.title}>ブログ</h1>
          <ul className={styles.postsList}>
            {blogPosts.map((post) => (
              <li key={post.id} className={styles.post}>
                <h2 className={styles.postTitle}>{post.title}</h2>
                <p className={styles.postDate}>{post.date}</p>
                <p className={styles.postExcerpt}>{post.excerpt}</p>
                <a href={`/blog/${post.id}`}>続きを読む</a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
