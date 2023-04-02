import React from 'react';
import Head from 'next/head';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
// import ProjectCard from '../src/components/ProjectCard/ProjectCard';

const IndexPage: React.FC = () => {
  // この配列にプロジェクト情報を入れていきます。
  const projects = [
    {
      id: '1',
      title: 'Project 1',
      description: 'Project 1の説明文です。',
      imageUrl: '/images/project1.jpg',
    },
    // 他のプロジェクト情報を追加できます。
  ];

  return (
    <>
      <Head>
        <title>ポートフォリオ</title>
        <meta name="description" content="ポートフォリオサイトです。" />
      </Head>
      <Header />
      <main>
        <section>
          <h1>自己紹介</h1>
          <p>こんにちは、私は(あなたの名前)です。ここに自己紹介文を書いてください。</p>
        </section>
        <section>
          <h2>プロジェクト一覧</h2>
          {/* <div>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div> */}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
