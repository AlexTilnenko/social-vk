import React, { useEffect } from 'react';
import { compose } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import withAuthRedirect from '../hoc/withAuthRedirect';
import Loader from '../../components/Loader/Loader';
import { fetchUsers, setCurrentPage, fetchToggleFollow } from '../../actions/users';
import { selectUserPagesCount, selectUsersData } from '../../selectors/usersSelectors';

import photoHolder from '../../assets/img/user.png';

function Users() {
   console.log('users render');
   const dispatch = useDispatch();
   const { items, pageSize, currentPage, isLoading, followingInProgress } = useSelector(selectUsersData);

   const pagesCount = useSelector(selectUserPagesCount);

   useEffect(() => {
      dispatch(fetchUsers(currentPage, pageSize));
   }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

   const onPageChange = (page) => {
      dispatch(setCurrentPage(page));
   };

   const onClickToggleFollow = (id) => {
      dispatch(fetchToggleFollow(id));
   };

   return (
      <div className="users">
         {isLoading && <Loader />}
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
         <ul className="users__list">
            {items.map(({ id, name, followed, photos }) => {
               return (
                  <li className="users__item block" key={id}>
                     <Link to={`/profile/${id}`}>
                        <span className="users__item-photo avatar">
                           <img src={photos.large || photoHolder} alt={name} />
                        </span>
                        <span className="users__item-name">{name}</span>
                     </Link>
                     <button
                        className={classNames('btn', { 'btn--unfollow': followed, 'btn--follow': !followed })}
                        onClick={() => onClickToggleFollow(id)}
                        disabled={followingInProgress.some((item) => item === id)}
                     >
                        {followed ? 'Подписаться' : 'Вы подписаны'}
                     </button>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}

export default compose(withAuthRedirect)(Users);
