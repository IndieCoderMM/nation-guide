import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { BiGlobe } from 'react-icons/bi';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={`${styles.container} maxContainer`}>
        <p>Copyright &copy; 2023 All rights reserved.</p>
        <h2 className={`${styles.title}`}>nationguide.</h2>
        <ul className={styles.socials}>
          <li>
            <a
              href="https://github.com/indiecodermm"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              title="GitHub"
            >
              <FiGithub />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/hthantoo"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <FiLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://heinthantoo.me"
              target="_blank"
              rel="noreferrer"
              aria-label="Portfolio"
              title="Portfolio"
            >
              <BiGlobe />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
