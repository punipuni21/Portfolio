import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.copy}>&copy; {new Date().getFullYear()} あなたの名前</p>
      </div>
    </footer>
  );
};

export default Footer;
