import { usersApi } from '../api/api';

import { SET_USERS, SET_CURRENT_PAGE, SET_LOADING, TOGGLE_FOLLOW_USER, SET_FOLLOWING } from './types';

export const setUsers = (usersData) => ({
   type: SET_USERS,
   payload: usersData,
});

export const setCurrentPage = (page) => ({
   type: SET_CURRENT_PAGE,
   payload: page,
});

export const setLoadingProgress = () => ({
   type: SET_LOADING,
});

export const setFollowingProgress = (data) => ({
   type: SET_FOLLOWING,
   payload: data,
});

export const toggleFollow = (id) => ({
   type: TOGGLE_FOLLOW_USER,
   payload: id,
});

export const fetchUsers = (currentPage, pageSize) => async (dispatch) => {
   dispatch(setLoadingProgress());
   await usersApi
      .getUsers(currentPage, pageSize)
      .then((resp) => {
         dispatch(setUsers(resp));
      })
      .catch((e) => {
         console.log(e);
      });
};

export const fetchToggleFollow = (id) => async (dispatch) => {
   dispatch(setFollowingProgress({ isFetching: true, id }));
   await usersApi.toggleFollowUser(id).then((resp) => {
      if (resp.resultCode === 0) {
         dispatch(toggleFollow(id));
      }
   });
};
