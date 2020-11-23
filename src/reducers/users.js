import { SET_USERS, SET_CURRENT_PAGE, SET_LOADING, TOGGLE_FOLLOW_USER, SET_FOLLOWING } from '../actions/types';

export const initialState = {
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
         if (action.payload) {
            return {
               ...state,
               items: action.payload.items,
               totalUsersCount: action.payload.totalCount,
               isLoading: false,
            };
         }
         return state;
      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.payload || state.currentPage,
            isLoading: false,
         };
      case TOGGLE_FOLLOW_USER:
         return {
            ...state,
            items: state.items.map((user) => {
               return user.id === action.payload ? { ...user, followed: !user.followed } : user;
            }),
            followingInProgress: state.followingInProgress.filter((id) => id !== action.payload),
         };

      case SET_LOADING:
         return {
            ...state,
            isLoading: true,
         };
      case SET_FOLLOWING:
         return {
            ...state,
            followingInProgress: action.payload.isFetching && [...state.followingInProgress, action.payload.id],
         };
      default:
         return state;
   }
};

export default users;
