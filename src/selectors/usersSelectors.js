import { createSelector } from 'reselect';

export const selectUserPagesCount = createSelector(
   (state) => state.users, 
   ({totalUsersCount, pageSize}) => Math.ceil(totalUsersCount / pageSize)
   );
export const selectUsersData = (state) => state.users;
