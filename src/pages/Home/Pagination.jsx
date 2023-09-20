import { useDispatch, useSelector } from 'react-redux';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import PropTypes from 'prop-types';

import {
  nextPage,
  prevPage,
  selectPage,
} from '../../redux/displaySettingsSlice';
import styles from './styles/Pagination.module.css';

const Pagination = ({ totalPage }) => {
  const currentPage = useSelector(selectPage);
  const dispatch = useDispatch();
  return (
    <div className={styles.container}>
      <button
        type="button"
        aria-label="previous"
        className={styles.btn}
        onClick={() => dispatch(prevPage())}
        disabled={currentPage === 0}
      >
        <BiChevronLeft size={48} />
      </button>
      <div className={styles.pageNumber}>
        <span>{currentPage + 1}</span>
        {/* eslint-disable-next-line */}
        <span className={styles.smallText}>/{totalPage}</span>
      </div>
      <button
        type="button"
        aria-label="next"
        className={styles.btn}
        onClick={() => dispatch(nextPage())}
        disabled={currentPage === totalPage - 1}
      >
        <BiChevronRight size={48} />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  totalPage: PropTypes.number.isRequired,
};

export default Pagination;
