import { Link } from 'react-router-dom';
import styles from '../styles/PageHolder.module.css';
import ErrorImg from '../assets/error.svg';

const PageHolder = ({ title, message, showHome = false }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.text}>{message}</p>
      <img src={ErrorImg} alt="error" className={styles.img} />
      {showHome && (
        <Link to="/" className="home-btn">
          Back to Home
        </Link>
      )}
    </div>
  );
};

export default PageHolder;
