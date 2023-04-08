import React from "react";
import styles from "./SocialMediaIcon.module.css";

interface SocialMedia {
  name: string;
  icon: string;
  url: string;
}

interface SocialMediaIconProps {
  socialMedia: SocialMedia;
}

const SocialMediaIcon: React.FC<SocialMediaIconProps> = ({ socialMedia }) => {
  return (
    <a
      href={socialMedia.url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.iconContainer}
    >
      <img
        src={socialMedia.icon}
        alt={socialMedia.name}
        className={styles.icon}
      />
    </a>
  );
};

export default SocialMediaIcon;
