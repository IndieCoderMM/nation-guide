import { useDispatch, useSelector } from 'react-redux';
import {
  BiChevronLeft,
  BiChevronRight,
  BiDotsHorizontalRounded,
} from 'react-icons/bi';
import PropTypes from 'prop-types';

import {
  nextPage,
  prevPage,
  selectPage,
  setPage,
} from '../../redux/displaySettingsSlice';
import styles from './styles/Pagination.module.css';
import usePagination from '../../hooks/usePagination';

const Pagination = ({ total, limit }) => {
  const currentPage = useSelector(selectPage);
  const totalPage = Math.ceil(total / limit);
  const pagination = usePagination(totalPage, currentPage + 1, 1);
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
        <BiChevronLeft />
      </button>
      <ul className={styles.range}>
        {pagination.map((pageNo) => (
          <li key={pageNo} className={styles.pageNumber}>
            <button
              type="button"
              aria-label={`page ${pageNo}`}
              className={`${styles.btn} ${
                pageNo === currentPage + 1 ? styles.active : ''
              }`}
              onClick={() => dispatch(setPage(pageNo - 1))}
              disabled={pageNo < 0}
            >
              {pageNo < 0 ? <BiDotsHorizontalRounded /> : pageNo}
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        aria-label="next"
        className={styles.btn}
        onClick={() => dispatch(nextPage())}
        disabled={currentPage === totalPage - 1}
      >
        <BiChevronRight />
      </button>
    </div>
  );
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  limit: PropTypes.number.isRequired,
};

export default Pagination;
