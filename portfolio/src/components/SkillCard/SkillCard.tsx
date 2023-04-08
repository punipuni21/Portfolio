import React from "react";
import styles from "./SkillCard.module.css";

interface Skill {
  name: string;
  icon: string;
}

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <div className={styles.card}>
      <img src={skill.icon} alt={skill.name} className={styles.icon} />
      <h3 className={styles.name}>{skill.name}</h3>
    </div>
  );
};

export default SkillCard;
