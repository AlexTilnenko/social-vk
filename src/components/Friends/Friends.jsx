import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Friend from './Friend/Friend';
import { selectFriendsData } from '../../selectors/friendsSelectors';
import { useEffect } from 'react';
import { fetchFriends, setFriendsPage, setFriendsFetching } from '../../actions/friends';
import { fetchFollow, fetchUnfollow } from '../../actions/users';
import debounce from 'lodash/debounce';
import { useState } from 'react';

import { usersApi } from '../../api/api';
import { useCallback } from 'react';

function Friends() {
   const dispatch = useDispatch();
   // const { items, pageSize, currentPage, totalCount, isFetching } = useSelector(selectFriendsData);

   const [items, setItems] = useState([]);
   const [currentPage, setCurrentPage] = useState(1);
   const [isFetching, setIsFetching] = useState(true);
   const [totalCount, setTotalCount] = useState(0);

   useEffect(() => {
      if (isFetching) {
         console.log('fetch');
         usersApi
            .getUsers(currentPage, 10, null, true)
            .then((resp) => {
               setItems([...items, ...resp.items]);
               setCurrentPage((state) => state + 1);
               setTotalCount(resp.totalCount);
            })
            .finally(() => setIsFetching(false));
      }
      // if (isFetching) {
      //    console.log('fetching');
      //    dispatch(fetchFriends(currentPage, pageSize, null, true));
      //    dispatch(setFriendsPage(currentPage + 1));
      // }
   }, [isFetching]); // eslint-disable-line react-hooks/exhaustive-deps

   const friendsScrollHandler = debounce((e) => {
      const scrollToBottom =
         e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight);
      if (scrollToBottom <= 150 && totalCount > items.length) {
         setIsFetching(true);
         // dispatch(setFriendsFetching(true));
      }
   }, 50);

   useEffect(() => {
      console.log('listener in');
      document.addEventListener('scroll', friendsScrollHandler);
      return () => {
         console.log('listener out');
         document.removeEventListener('scroll', friendsScrollHandler);
      };
   }, [friendsScrollHandler]); // eslint-disable-line react-hooks/exhaustive-deps

   const onClickFollow = (id) => {
      dispatch(fetchFollow(id));
   };
   const onClickUnfollow = (id) => {
      dispatch(fetchUnfollow(id));
   };

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
