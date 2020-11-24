import React from 'react';
import classNames from 'classnames';

function Pagination({ pagesCount, currentPage, onPageChange }) {
   return (
      <ul className="users__pages-list">
         {Array(pagesCount)
            .fill(0)
            .map((item, index) => {
               const page = index + 1;
               return (
                  <li
                     key={page}
                     className={classNames('users__page', 'block', {
                        active: currentPage === page,
                     })}
                     onClick={() => onPageChange(page)}
                  >
                     {page}
                  </li>
               );
            })}
      </ul>
   );
}

export default Pagination;
