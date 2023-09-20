import PropTypes from 'prop-types';
import styles from './styles/FloatingActions.module.css';

const FloatingActions = ({ actions }) => (
  <div className={styles.container}>
    {/* eslint-disable-next-line object-curly-newline */}
    {actions.map(({ label, icon, onClick }) => (
      <button
        key={label}
        type="button"
        onClick={onClick}
        aria-label={label}
        className={styles.action}
      >
        {icon}
        <span className={styles.tooltip}>{label}</span>
      </button>
    ))}
  </div>
);

FloatingActions.propTypes = {
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      onClick: PropTypes.func.isRequired,
    }),
  ).isRequired,
};

export default FloatingActions;
