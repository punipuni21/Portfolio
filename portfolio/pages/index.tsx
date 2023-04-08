import React from "react";
import Head from "next/head";
import Header from "../src/components/Header/Header";
import Footer from "../src/components/Footer/Footer";
import ProjectCard from "../src/components/ProjectCard/ProjectCard";
import SkillCard from "../src/components/SkillCard/SkillCard";
import SocialMediaIcon from "../src/components/SocialMediaIcon/SocialMediaIcon";

const IndexPage: React.FC = () => {
  // この配列にプロジェクト情報を入れていきます。
  const projects = [
    {
      id: "1",
      title: "Project 1",
      description: "Project 1の説明文です。",
      imageUrl: "../public/images/favicon.ico",
    },
    // 他のプロジェクト情報を追加できます。
  ];

  const skills = [
    {
      name: "JavaScript",
      icon: "/icons/javascript.svg",
    },
    {
      name: "TypeScript",
      icon: "/icons/typescript.svg",
    },
    {
      name: "React",
      icon: "/icons/react.svg",
    },
    // 他のスキルを追加...
  ];

  const socialMedias = [
    {
      name: "GitHub",
      icon: "/icons/github.svg",
      url: "https://github.com/punipuni21",
    },
    {
      name: "Twitter",
      icon: "/icons/twitter.svg",
      url: "https://twitter.com/puni_kyopro",
    },
    {
      name: "LinkedIn",
      icon: "/icons/linkedin.svg",
      url: "https://www.linkedin.com/in/yourusername/",
    },
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
          <p>
            こんにちは、私は(あなたの名前)です。ここに自己紹介文を書いてください。
          </p>
        </section>
        <section>
          <h2>プロジェクト一覧</h2>
          <div className="projectContainer">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>
        <section>
          <h2>スキル一覧</h2>
          <div className="skillsContainer">
            {skills.map((skill) => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </section>
        <section>
          <h2>ソーシャルメディア</h2>
          <div className="socialMediaContainer">
            {socialMedias.map((socialMedia) => (
              <SocialMediaIcon
                key={socialMedia.name}
                socialMedia={socialMedia}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
