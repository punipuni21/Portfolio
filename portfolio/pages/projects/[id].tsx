import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/projects/Project.module.css";

interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  content: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "プロジェクト1",
    date: "2023-04-01",
    description: "これは、プロジェクト1の説明です。",
    content: "ここにプロジェクト1の詳細な内容が記載されます。",
  },
  {
    id: "2",
    title: "プロジェクト2",
    date: "2023-04-15",
    description: "これは、プロジェクト2の説明です。",
    content: "ここにプロジェクト2の詳細な内容が記載されます。",
  },
];

const ProjectPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div>プロジェクトが見つかりません。</div>;
  }

  return (
    <>
      <Head>
        <title>{project.title} - ポートフォリオ</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.date}>{project.date}</p>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.content}>{project.content}</div>
      </div>
    </>
  );
};

export default ProjectPage;
