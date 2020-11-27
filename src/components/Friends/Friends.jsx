import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Friend from './Friend/Friend';
import { selectFriendsData, selectFriendsPagesCount } from '../../selectors/friendsSelectors';
import { useEffect } from 'react';
import { fetchFriends } from '../../actions/friends';
import Pagination from '../common/Pagination/Pagination';
import { setFriendsPage } from '../../actions/friends';
import { fetchFollow, fetchUnfollow } from '../../actions/users';

function Friends() {
   const dispatch = useDispatch();
   const { items, pageSize, currentPage, totalCount, isLoading } = useSelector(selectFriendsData);
   const pagesCount = useSelector(selectFriendsPagesCount);

   useEffect(() => {
      dispatch(fetchFriends(currentPage, pageSize, null, true));
   }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

   const onPageChange = (page) => {
      dispatch(setFriendsPage(page));
   };

   const onClickFollow = (id) => {
      dispatch(fetchFollow(id));
   };
   const onClickUnfollow = (id) => {
      dispatch(fetchUnfollow(id));
   };

   return (
      <div className="friends block">
         <div className="friends__header">
            <Pagination
               pagesCount={pagesCount}
               currentPage={currentPage}
               onPageChange={onPageChange}
               isLoading={isLoading}
               visiblePagesSize={pageSize}
            />

            <div className="friends__count">Подписки {totalCount}</div>
         </div>
         {items.map((friend, index) => {
            const { name, id, photos, status, followed } = friend;
            return (
               <Friend
                  key={`${name}_${index}`}
                  img={photos.large}
                  name={name}
                  id={id}
                  status={status}
                  followed={followed}
                  onClickFollow={onClickFollow}
                  onClickUnfollow={onClickUnfollow}
               />
            );
         })}
      </div>
   );
}

export default Friends;
