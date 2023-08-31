import PropTypes from 'prop-types';
import styles from './DataItem.module.css';

const DataItem = ({ title, data, unit }) => (
  <div className={styles.container}>
    <h4 className={styles.title}>{title}</h4>
    <div className={styles.data}>
      <p>
        {data}&nbsp;{unit}
      </p>
    </div>
  </div>
);

DataItem.propTypes = {
  title: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  unit: PropTypes.string,
};

DataItem.defaultProps = {
  title: '',
  data: 0,
  unit: '',
};

export default DataItem;
