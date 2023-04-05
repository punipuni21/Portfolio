import React from "react";
import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/projects/Project.module.css";

interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "プロジェクト1",
    date: "2023-04-01",
    description: "これは、プロジェクト1の説明です。",
  },
  {
    id: "2",
    title: "プロジェクト2",
    date: "2023-04-15",
    description: "これは、プロジェクト2の説明です。",
  },
];

const ProjectsIndex: React.FC = () => {
  return (
    <>
      <Head>
        <title>プロジェクト - ポートフォリオ</title>
      </Head>
      <div className={styles.container}>
        {projects.map((project) => (
          <article key={project.id} className={styles.project}>
            <h2 className={styles.title}>
              <Link href={`/projects/${project.id}`}>{project.title}</Link>
            </h2>
            <p className={styles.date}>{project.date}</p>
            <p className={styles.description}>{project.description}</p>
          </article>
        ))}
      </div>
    </>
  );
};

export default ProjectsIndex;
