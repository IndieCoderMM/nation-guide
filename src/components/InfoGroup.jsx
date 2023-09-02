import PropTypes from 'prop-types';
import styles from '../styles/InfoGroup.module.css';

const InfoGroup = ({ title, children }) => (
  <div className={styles.group}>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </div>
);

InfoGroup.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default InfoGroup;
