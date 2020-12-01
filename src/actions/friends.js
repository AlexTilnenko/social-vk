import { usersApi } from '../api/api';
import { SET_FRIENDS, SET_FRIENDS_PAGE } from './types';

export const setFriends = (data) => ({
   type: SET_FRIENDS,
   payload: data,
});

export const setFriendsPage = (page) => ({
   type: SET_FRIENDS_PAGE,
   payload: page,
});

export const fetchFriends = (currentPage, pageSize, userName, isFriends) => async (dispatch) => {
   const resp = await usersApi.getUsers(currentPage, pageSize, userName, isFriends);
   dispatch(setFriends(resp));
};
