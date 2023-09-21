import PropTypes from 'prop-types';
import styles from './styles/FloatingActions.module.css';

/* eslint-disable-next-line object-curly-newline */
const Action = ({ label, icon, onClick, show }) => (
  <button
    key={label}
    type="button"
    onClick={onClick}
    aria-label={label}
    className={styles.action}
    style={show ? { opacity: 1 } : { opacity: 0 }}
  >
    {icon}
    <span className={styles.tooltip}>{label}</span>
  </button>
);

const FloatingActions = ({ actions }) => (
  <div className={styles.container}>
    {/* eslint-disable-next-line object-curly-newline */}
    {actions.map(({ label, icon, onClick, show }) => (
      <Action
        key={label}
        label={label}
        icon={icon}
        onClick={onClick}
        show={show}
      />
    ))}
  </div>
);

const ActionShape = PropTypes.shape({
  label: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  show: PropTypes.bool,
});

Action.propTypes = {
  ...ActionShape,
};

FloatingActions.propTypes = {
  actions: PropTypes.arrayOf(ActionShape).isRequired,
};

export default FloatingActions;
