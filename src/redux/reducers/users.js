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
            items: action.payload.items,
            totalUsersCount: action.payload.totalCount,
         };
      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.payload,
         };
      case FOLLOW_USER:
         return {
            ...state,
            items: state.items.map((user) => {
               return user.id === action.payload ? { ...user, followed: true } : user;
            }),
         };
      case UNFOLLOW_USER:
         return {
            ...state,
            items: state.items.map((user) => {
               return user.id === action.payload ? { ...user, followed: false } : user;
            }),
         };
      case SET_LOADING:
         return {
            ...state,
            isLoading: action.payload,
         };
      case SET_FOLLOWING:
         return {
            ...state,
            followingInProgress: action.payload.isFetching
               ? [...state.followingInProgress, action.payload.id]
               : state.followingInProgress.filter((id) => id !== action.payload.id),
         };
      default:
         return state;
   }
};

export default users;
