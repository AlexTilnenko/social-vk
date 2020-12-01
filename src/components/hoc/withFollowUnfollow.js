import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchFollow, fetchUnfollow } from '../../actions/users';

const withFollowUnfollow = (Component) => {
   return (props) => {
      const dispatch = useDispatch();
      const followHandler = (id) => {
         dispatch(fetchFollow(id));
      };
      const unfollowHandler = (id) => {
         dispatch(fetchUnfollow(id));
      };

      return <Component {...props} followHandler={followHandler} unfollowHandler={unfollowHandler} />;
   };
};

export default withFollowUnfollow;
