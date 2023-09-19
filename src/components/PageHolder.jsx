import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './styles/PageHolder.module.css';
import ErrorImg from '../assets/error.svg';

const PageHolder = ({ title, message, showHome }) => (
  <div className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    <p className={styles.text}>{message}</p>
    <img src={ErrorImg} alt="error" className={styles.img} />
    {showHome && (
      <Link to="/" className="btn rounded">
        Back to Home
      </Link>
    )}
  </div>
);

PageHolder.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  showHome: PropTypes.bool.isRequired,
};

export default PageHolder;
