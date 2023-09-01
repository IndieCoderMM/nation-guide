import React from 'react';
import { BsGithub, BsMoonStarsFill } from 'react-icons/bs';
import styles from '../styles/Navbar.module.css';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => (
  <header className={styles.header}>
    <div className={`${styles.container} maxContainer`}>
      <h1 className={styles.title}>nationguide.</h1>
      <div className={styles.buttons}>
        <ThemeSwitcher />
        <a
          href="https://github.com/indiecodermm/nation-guide"
          target="_blank"
          rel="noreferrer"
          className={styles.button}
        >
          <BsGithub />
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  </header>
);

export default Navbar;
