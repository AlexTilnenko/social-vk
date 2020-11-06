import {
   SET_USERS,
   SET_CURRENT_PAGE,
   SET_LOADING,
   FOLLOW_USER,
   UNFOLLOW_USER,
   SET_FOLLOWING,
} from '../actions/types';

const initialState = {
   items: [],
   pageSize: 24,
   totalUsersCount: 0,
   currentPage: 1,
   isLoading: null,
   followingInProgress: [],
};

const users = (state = initialState, action) => {
   switch (action.type) {
      case SET_USERS:
         return {
            ...state,
            items: action.usersData.items,
            totalUsersCount: action.usersData.totalCount,
         };
      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.page,
         };
      case FOLLOW_USER:
         return {
            ...state,
            items: state.items.map((user) => {
               return user.id === action.id ? { ...user, followed: true } : user;
            }),
         };
      case UNFOLLOW_USER:
         return {
            ...state,
            items: state.items.map((user) => {
               return user.id === action.id ? { ...user, followed: false } : user;
            }),
         };
      case SET_LOADING:
         return {
            ...state,
            isLoading: action.isFetching,
         };
      case SET_FOLLOWING:
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.id]
               : state.followingInProgress.filter((id) => id !== action.id),
         };
      default:
         return state;
   }
};

export default users;
