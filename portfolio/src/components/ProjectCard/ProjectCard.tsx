import React from "react";
import Link from "next/link";
import styles from "./ProjectCard.module.css";

interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className={styles.card}>
      <Link href={`/projects/${project.id}`}>
        <img
          src={project.imageUrl}
          alt={project.title}
          className={styles.image}
        />
        <h3 className={styles.title}>{project.title}</h3>
      </Link>
      <p className={styles.description}>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
