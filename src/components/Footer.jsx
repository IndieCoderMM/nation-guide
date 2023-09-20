import { Link } from 'react-router-dom';
import { socialLinks } from '../lib/constants';

import styles from './styles/Footer.module.css';

const Footer = () => (
  <footer>
    <div className={`${styles.container} maxContainer`}>
      <h2>
        <Link to="/" className={`${styles.title}`}>
          nationguide.
        </Link>
      </h2>
      <p>Copyright &copy; 2023 All rights reserved.</p>
      <ul className={styles.socials}>
        {socialLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              title={link.label}
            >
              {link.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
