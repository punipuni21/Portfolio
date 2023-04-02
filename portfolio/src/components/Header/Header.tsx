import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/">
          <a className={styles.logo}>ポートフォリオ</a>
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/about">
                <a className={styles.navLink}>自己紹介</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/projects">
                <a className={styles.navLink}>プロジェクト</a>
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/blog">
                <a className={styles.navLink}>ブログ</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;