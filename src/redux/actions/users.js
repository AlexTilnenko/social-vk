import { usersApi } from '../../api/api';

import {
   SET_USERS,
   SET_CURRENT_PAGE,
   SET_LOADING,
   FOLLOW_USER,
   UNFOLLOW_USER,
   SET_FOLLOWING,
} from './types';

export const setUsers = (usersData) => ({
   type: SET_USERS,
   payload: usersData,
});

export const fetchUsers = (currentPage, pageSize) => async (dispatch) => {
   dispatch(setLoadingProgress(true));
   await usersApi
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
   payload: page,
});

export const setLoadingProgress = (isFetching) => ({
   type: SET_LOADING,
   payload: isFetching,
});

export const setFollowingProgress = (data) => ({
   type: SET_FOLLOWING,
   payload: data,
});

export const fetchFollow = (id) => async (dispatch) => {
   dispatch(setFollowingProgress({isFetching: true, id}));
   await usersApi.followUser(id).then((resp) => {
      if (resp.resultCode === 0) {
         dispatch(follow(id));
      }
      dispatch(setFollowingProgress({ isFetching: false, id }));
   });
};

export const follow = (id) => ({
   type: FOLLOW_USER,
   payload: id,
});

export const fetchUnfollow = (id) => async (dispatch) => {
   dispatch(setFollowingProgress(true, id));
   await usersApi.unfollowUser(id).then((resp) => {
      if (resp.resultCode === 0) {
         dispatch(unfollow(id));
      }
      dispatch(setFollowingProgress(false, id));
   });
};

export const unfollow = (id) => ({
   type: UNFOLLOW_USER,
   payload: id,
});
