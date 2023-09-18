import styles from '../styles/Footer.module.css';
import { socialLinks } from '../lib/constants';

const Footer = () => (
  <footer>
    <div className={`${styles.container} maxContainer`}>
      <p>Copyright &copy; 2023 All rights reserved.</p>
      <h2 className={`${styles.title}`}>nationguide.</h2>
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
