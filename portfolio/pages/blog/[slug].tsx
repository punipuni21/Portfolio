import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Header from "../../src/components/Header/Header";
import Footer from "../../src/components/Footer/Footer";
import styles from "./BlogPost.module.css";

type BlogPost = {
  slug: string;
  title: string;
  date: string;
  content: string;
};

type BlogPostProps = {
  post: BlogPost;
};

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} - ポートフォリオ</title>
        <meta name="description" content={post.title} />
      </Head>
      <Header />
      <main className={styles.main}>
        <article className={styles.container}>
          <h1 className={styles.title}>{post.title}</h1>
          <p className={styles.date}>{post.date}</p>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
      <Footer />
    </>
  );
};

export default BlogPost;

export const getStaticPaths: GetStaticPaths = async () => {
  // ここでブログ記事のパスを生成するロジックを実装します。
  // 簡単な例として、1つの記事だけを返すようにしています。
  const paths = [
    {
      params: {
        slug: "初めてのブログ",
      },
    },
    {
      params: {
        slug: "1",
      },
    },
  ];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{
  post: BlogPost | null;
}> = async ({ params }) => {
  // ここでslugに応じたブログ記事データを取得します。
  // 今回は、slugが'初めてのブログ'の場合のみデータを返すようにしています。
  let post: BlogPost | null = null;

  if (params?.slug === "初めてのブログ") {
    post = {
      slug: "初めてのブログ",
      title: "初めてのブログ",
      date: "2023-04-01",
      content:
        "<p>これは、初めてのブログ記事です。</p><p>この記事は、Next.jsを使って作成されました。</p>",
    };
  }
  if (params?.slug === "1") {
    post = {
      slug: "1",
      title: "ブログ記事タイトル1",
      date: "2023-04-01",
      content:
        "<p>これはブログ記事1の内容です</p><p>この記事は、Next.jsを使って作成されました。</p>",
    };
  }

  return {
    props: {
      post,
    },
  };
};
