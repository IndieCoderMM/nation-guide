import styles from './styles/ActionsBar.module.css';
import SearchBox from './SearchBox';
import SortingBox from './SortingBox';

const ActionsBar = () => (
  <div className={`${styles.container}`}>
    <SearchBox />
    <SortingBox />
  </div>
);

export default ActionsBar;
