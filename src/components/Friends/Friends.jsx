import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash/debounce';
import Friend from './Friend/Friend';
import { selectFriendsData } from '../../selectors/friendsSelectors';
import { fetchFriends, setFriendsPage } from '../../actions/friends';
import { compose } from 'redux';
import withAuthRedirect from '../hoc/withAuthRedirect';
import Loader from '../common/Loader/Loader';
import { useState } from 'react';

function Friends() {
   const dispatch = useDispatch();
   const [isFetching, setIsFetching] = useState(true);
   const { items, pageSize, currentPage, totalCount, isFirstLoading } = useSelector(selectFriendsData);

   useEffect(() => {
      if (isFetching) {
         if (Math.ceil(totalCount / pageSize) >= currentPage - 1) {
            dispatch(setFriendsPage(currentPage + 1));
         }
         dispatch(fetchFriends(currentPage, pageSize, null, true));
         setIsFetching(false);
      }
   }, [isFetching]); // eslint-disable-line react-hooks/exhaustive-deps

   const friendsScrollHandler = debounce((e) => {
      const scrollToBottom =
         e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight);
      if (scrollToBottom <= 250 && totalCount > items.length) {
         setIsFetching(true);
      }
   }, 50);

   useEffect(() => {
      document.addEventListener('scroll', friendsScrollHandler);
      return () => {
         document.removeEventListener('scroll', friendsScrollHandler);
      };
   }, [friendsScrollHandler]); // eslint-disable-line react-hooks/exhaustive-deps

   if (isFirstLoading) <Loader />;
   return (
      <div className="friends block">
         <div className="friends__header">
            <div className="friends__count">Подписки {totalCount}</div>
         </div>
         {items.map((friend, index) => {
            const { name, id, photos, status, followed } = friend;
            return (
               <Friend
                  key={`${name}_${index}`}
                  id={id}
                  name={name}
                  status={status}
                  img={photos.large}
                  followed={followed}
               />
            );
         })}
      </div>
   );
}

export default compose(withAuthRedirect)(Friends);
