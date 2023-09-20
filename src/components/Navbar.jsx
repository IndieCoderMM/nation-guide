import { Link } from 'react-router-dom';
import { BsGithub } from 'react-icons/bs';

import styles from './styles/Navbar.module.css';
import ThemeSwitcher from './ThemeSwitcher';

const Navbar = () => (
  <header className={styles.header}>
    <div className={`${styles.container} maxContainer`}>
      <h1>
        <Link to="/" className={styles.title}>
          nationguide.
        </Link>
      </h1>
      <div className={styles.buttons}>
        <ThemeSwitcher />
        <a
          href="https://github.com/indiecodermm/nation-guide"
          target="_blank"
          rel="noreferrer"
          className={styles.button}
        >
          <BsGithub />
          <span>View Code</span>
        </a>
      </div>
    </div>
  </header>
);

export default Navbar;
