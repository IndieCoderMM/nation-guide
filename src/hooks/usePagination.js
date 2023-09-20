import { useMemo } from 'react';

const range = (start, end) => {
  const length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

const usePagination = (totalPageCount, currentPage, siblingCount) => {
  const paginationRange = useMemo(() => {
    const totalPageNumbers = siblingCount * 2 + 3;
    // first, last, left and right siblings, and current page

    // Case 1: When the total page numbers are less than the page sibling count
    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount,
    );

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    // Case 2: When the page number is closer to the beginning
    if (leftSiblingIndex <= 2) {
      const leftRange = range(firstPageIndex, currentPage);
      return [...leftRange, rightSiblingIndex, -1, lastPageIndex];
    }

    // Case 3: When the page number is closer to the end
    if (rightSiblingIndex >= totalPageCount - 1) {
      const rightRange = range(currentPage, lastPageIndex);
      return [firstPageIndex, -1, leftSiblingIndex, ...rightRange];
    }

    // Case 4: When the page number is somewhere in the middle
    const middleRange = range(leftSiblingIndex, rightSiblingIndex);
    return [firstPageIndex, -1, ...middleRange, -2, lastPageIndex];
  }, [totalPageCount, currentPage, siblingCount]);

  return paginationRange;
};

export default usePagination;
