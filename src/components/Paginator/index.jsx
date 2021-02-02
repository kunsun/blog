import React from 'react';
import { Link } from 'gatsby';
import './index.css';

const range = (start, len, step = 1) =>
  len
    ? new Array(len)
        .fill(undefined)
        .map((_, i) => +(start + i * step).toFixed(4))
    : [];

const Paginator = ({
  currentPage,
  limit,
  numPages,
  skip,
}) => {
  const previousPage = currentPage === 1 ? currentPage : currentPage - 1;
  const pagesRange = range(previousPage, numPages + 1 - previousPage);
  const truncatedRange = pagesRange.slice(0, numPages);

  if (pagesRange[0] > 2) {
    truncatedRange.unshift(null);
  }
  if (pagesRange[0] > 1) {
    truncatedRange.unshift(1);
  }

  if (pagesRange[0] + 1 === numPages && pagesRange[0] - 1 > 0) {
    truncatedRange.splice(
      pagesRange.length - 1 - numPages,
      0,
      pagesRange[0] - 1,
    );
  }

  if (pagesRange[0] + numPages < numPages) {
    truncatedRange.push(null);
  }

  if (pagesRange[0] + numPages - 1 < numPages) {
    truncatedRange.push(numPages);
  }

  const getFullPath = (n) => {
    return n === 1 ? '/' : '/' + "blog/" + n;
  };

  return (
    <div className="paginator">
      {
        [...new Set(truncatedRange)].map((page, i) =>
          page === null ? (
            <div className="spacer">...</div>
          ) : (
            <Link
              key={`PaginatorPage_${page}`}
              to={getFullPath(page)}
              className={`paginator-link ${currentPage === page ? 'active' : ''}` }
            >
              {page}
            </Link>
          ),
        )
      }
    </div>
  )
}

export default Paginator;