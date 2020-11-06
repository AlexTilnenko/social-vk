import { usersApi } from '../../api/api';

import {
   SET_USERS,
   SET_CURRENT_PAGE,
   SET_LOADING,
   FOLLOW_USER,
   UNFOLLOW_USER,
   SET_FOLLOWING,
} from './types';

export const setUsers = (data) => ({
   type: SET_USERS,
   usersData: data,
});

export const fetchUsers = (currentPage, pageSize) => (dispatch) => {
   dispatch(setLoadingProgress(true));
   usersApi
      .getUsers(currentPage, pageSize)
      .then((resp) => {
         dispatch(setUsers(resp));
         dispatch(setLoadingProgress(false));
      })
      .catch((e) => {
         console.log(e);
      });
};

export const setCurrentPage = (page) => ({
   type: SET_CURRENT_PAGE,
   page,
});

export const setLoadingProgress = (isFetching) => ({
   type: SET_LOADING,
   isFetching,
});

export const setFollowingProgress = (isFetching, id) => ({
   type: SET_FOLLOWING,
   isFetching,
   id,
});

export const fetchFollow = (id) => (dispatch) => {
   dispatch(setFollowingProgress(true, id));
   usersApi.followUser(id).then((resp) => {
      if (resp.resultCode === 0) {
         dispatch(follow(id));
      }
      dispatch(setFollowingProgress(false, id));
   });
};

export const follow = (id) => ({
   type: FOLLOW_USER,
   id,
});

export const fetchUnfollow = (id) => (dispatch) => {
   dispatch(setFollowingProgress(true, id));
   usersApi.unfollowUser(id).then((resp) => {
      if (resp.resultCode === 0) {
         dispatch(unfollow(id));
      }
      dispatch(setFollowingProgress(false, id));
   });
};

export const unfollow = (id) => ({
   type: UNFOLLOW_USER,
   id,
});
