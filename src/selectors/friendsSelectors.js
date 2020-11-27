import { createSelector } from 'reselect';

export const selectFriendsPagesCount = createSelector(
   (state) => state.friends,
   ({ totalCount, pageSize }) => Math.ceil(totalCount / pageSize)
);
export const selectFriendsData = (state) => state.friends;
