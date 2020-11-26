import React, { useEffect } from 'react';
import { compose } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import withAuthRedirect from '../hoc/withAuthRedirect';
import Loader from '../common/Loader/Loader';
import { fetchUsers, setCurrentPage, fetchFollow, fetchUnfollow } from '../../actions/users';
import { selectUserPagesCount, selectUsersData } from '../../selectors/usersSelectors';
import Pagination from '../common/Pagination/Pagination';
import User from './User';

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
         <Pagination
            pagesCount={pagesCount}
            currentPage={currentPage}
            onPageChange={onPageChange}
            isLoading={isLoading}
            visiblePagesSize={10}
         />
         <ul className="users__list">
            {items.map(({ id, name, followed, photos }) => {
               return (
                  <User
                     key={id}
                     id={id}
                     name={name}
                     photos={photos}
                     followed={followed}
                     followingInProgress={followingInProgress}
                     onClickUnfollow={onClickUnfollow}
                     onClickFollow={onClickFollow}
                  />
               );
            })}
         </ul>
      </div>
   );
}

export default compose(withAuthRedirect)(Users);
