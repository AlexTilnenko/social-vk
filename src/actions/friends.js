import { usersApi } from '../api/api';
import { SET_FRIENDS, SET_FRIENDS_PAGE, SET_FRIENDS_FETCHING } from './types';

export const setFriends = (data) => ({
   type: SET_FRIENDS,
   payload: data,
});

export const setFriendsFetching = (isFetching) => ({
   type: SET_FRIENDS_FETCHING,
   payload: isFetching,
});

export const setFriendsPage = (page) => ({
   type: SET_FRIENDS_PAGE,
   payload: page,
});

export const fetchFriends = (currentPage, pageSize, userName, isFriends) => async (dispatch) => {
   dispatch(setFriendsFetching(false));
   const resp = await usersApi.getUsers(currentPage, pageSize, userName, isFriends);
   dispatch(setFriends(resp));
};
