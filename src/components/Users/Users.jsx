import React from 'react';
import { useEffect } from 'react';
import { compose } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Loader from '../../components/Loader/Loader';
import { fetchUsers, setCurrentPage, fetchFollow, fetchUnfollow } from '../../actions/users';
import withAuthRedirect from '../hoc/withAuthRedirect';

import photoHolder from '../../assets/img/user.png';
import { selectUserPagesCount, selectUsersData } from '../../selectors/usersSelectors';

function Users() {
   const dispatch = useDispatch();
   const { items, pageSize, currentPage, isLoading, followingInProgress } = useSelector(selectUsersData);

   const pagesCount = useSelector(selectUserPagesCount);

   useEffect(() => {
      dispatch(fetchUsers(currentPage, pageSize));
   }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

   const onPageChange = (page) => {
      dispatch(setCurrentPage(page));
   };

   const onClickFollow = (id) => {
      dispatch(fetchFollow(id));
   };

   const onClickUnfollow = (id) => {
      dispatch(fetchUnfollow(id));
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
                     {followed ? (
                        <button
                           className="btn btn--unfollow"
                           onClick={() => onClickUnfollow(id)}
                           disabled={followingInProgress.some((item) => item === id)}
                        >
                           Unfollow
                        </button>
                     ) : (
                        <button
                           className="btn btn--follow"
                           onClick={() => onClickFollow(id)}
                           disabled={followingInProgress.some((item) => item === id)}
                        >
                           Follow
                        </button>
                     )}
                  </li>
               );
            })}
         </ul>
      </div>
   );
}

export default compose(withAuthRedirect)(Users);
