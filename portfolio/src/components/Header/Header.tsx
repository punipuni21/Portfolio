import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          ポートフォリオ
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/about" className={styles.navLink}>
                自己紹介
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/projects" className={styles.navLink}>
                プロジェクト
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/blog" className={styles.navLink}>
                ブログ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header
