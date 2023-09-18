import PropTypes from 'prop-types';
import styles from '../styles/InfoGroup.module.css';

const InfoGroup = ({ title, icon, children }) => (
  <div className={styles.group}>
    <header className={styles.header}>
      <h2 className={styles.title}>{title}</h2>
      {icon}
    </header>
    {children}
  </div>
);

InfoGroup.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export default InfoGroup;
