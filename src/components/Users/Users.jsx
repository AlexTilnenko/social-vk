import React, { useEffect } from 'react';
import { compose } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import User from './User';
import Loader from '../common/Loader/Loader';
import Pagination from '../common/Pagination/Pagination';
import { fetchUsers, setCurrentPage } from '../../actions/users';
import { selectUserPagesCount, selectUsersData } from '../../selectors/usersSelectors';
import withFollowUnfollow from '../hoc/withFollowUnfollow';

function Users({ followHandler, unfollowHandler }) {
   const dispatch = useDispatch();
   const { items, pageSize, currentPage, isLoading, followingInProgress } = useSelector(selectUsersData);
   const pagesCount = useSelector(selectUserPagesCount);
   useEffect(() => {
      dispatch(fetchUsers(currentPage, pageSize));
   }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

   const onPageChange = (page) => {
      dispatch(setCurrentPage(page));
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
                     followHandler={followHandler}
                     unfollowHandler={unfollowHandler}
                  />
               );
            })}
         </ul>
      </div>
   );
}

export default compose(withFollowUnfollow)(Users);
