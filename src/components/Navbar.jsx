import React from 'react';
import { BsMoonStarsFill } from 'react-icons/bs';
import styles from './Navbar.module.css';

const Navbar = () => (
  <header className={styles.header}>
    <div className={styles.container}>
      <h1>nationguide</h1>
      <button type="button" className={styles.button}>
        <BsMoonStarsFill />
        <span>Dark Mode</span>
      </button>
    </div>
  </header>
);

export default Navbar;
