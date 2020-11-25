import React, { useState } from 'react';
import classNames from 'classnames';
import { Formik, Field, Form } from 'formik';
import NavButton from './NavButton';

const Pagination = React.memo(function Pagination({
   pagesCount,
   currentPage,
   onPageChange,
   isLoading,
   visiblePartSize = 10,
}) {
   const [visiblePartNumber, setVisiblePartNumber] = useState(1);

   const pages = [];
   for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
   }
   const visiblePartsCount = Math.ceil(pagesCount / visiblePartSize);
   const leftBorder = (visiblePartNumber - 1) * visiblePartSize + 1;
   const rightBorder = visiblePartNumber * visiblePartSize;

   const nextPageHandler = () => {
      if (currentPage >= rightBorder) {
         setVisiblePartNumber(visiblePartNumber + 1);
      }
      onPageChange(currentPage + 1);
   };

   const prevPageHandler = () => {
      if (currentPage <= leftBorder) {
         setVisiblePartNumber(visiblePartNumber - 1);
      }
      onPageChange(currentPage - 1);
   };

   const toEndHandler = () => {
      setVisiblePartNumber(visiblePartsCount);
      onPageChange((visiblePartsCount - 1) * visiblePartSize + 1);
   };

   const toStartHandler = () => {
      setVisiblePartNumber(1);
      onPageChange(1);
   };

   const goToPageHandler = ({ currentPage }, { resetForm }) => {
      const currentPartNumber = Math.ceil(currentPage / visiblePartSize);
      if (currentPage >= 1 && currentPartNumber <= visiblePartsCount) {
         setVisiblePartNumber(currentPartNumber);
         onPageChange(currentPage);
         resetForm();
      }
   };

   return (
      <ul className="pagination">
         {visiblePartNumber > 1 && (
            <div className="pagination__btn-group">
               <NavButton handler={toStartHandler} disabledTrigger={isLoading} icoId="#double-arrow" />
               <NavButton handler={prevPageHandler} disabledTrigger={isLoading} icoId="#arrow" />
            </div>
         )}
         {pages
            .filter((page) => page >= leftBorder && page <= rightBorder)
            .map((page) => {
               return (
                  <li
                     key={page}
                     className={classNames('pagination__item', 'pagination__block', {
                        active: currentPage === page,
                     })}
                     onClick={() => onPageChange(page)}
                  >
                     {page}
                  </li>
               );
            })}
         {visiblePartsCount > visiblePartNumber && (
            <div className="pagination__btn-group">
               <NavButton handler={toEndHandler} disabledTrigger={isLoading} icoId="#double-arrow" />
               <NavButton handler={nextPageHandler} disabledTrigger={isLoading} icoId="#arrow" />
            </div>
         )}
         {pages.length > 10 && (
            <Formik
               initialValues={{
                  currentPage: '',
               }}
               onSubmit={(values, { resetForm }) => goToPageHandler(values, { resetForm })}
            >
               {({ values }) => (
                  <Form className="pagination__form">
                     <Field
                        type="number"
                        name="currentPage"
                        className="pagination__form-input"
                        value={values.currentPage}
                     />
                     <button className="pagination__form-btn" disabled={isLoading} type="submit">
                        Перейти
                     </button>
                  </Form>
               )}
            </Formik>
         )}
      </ul>
   );
});

export default Pagination;
