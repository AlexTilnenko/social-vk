import { SET_FRIENDS, SET_FRIENDS_PAGE, TOGGLE_FOLLOW_USER } from '../actions/types';

export const initialState = {
   items: [],
   totalCount: 0,
   pageSize: 10,
   currentPage: 1,
   isFirstLoading: true,
};

const profile = (state = initialState, action) => {
   switch (action.type) {
      case SET_FRIENDS:
         return {
            ...state,
            items: [...state.items, ...action.payload.items],
            totalCount: action.payload.totalCount,
            isFirstLoading: false,
         };
      case SET_FRIENDS_PAGE:
         return {
            ...state,
            currentPage: action.payload,
         };
      case TOGGLE_FOLLOW_USER:
         const currentUser = state.items.filter((item) => item.id === action.payload)[0];
         return {
            ...state,
            items: state.items.map((user) => {
               return user.id === action.payload ? { ...user, followed: !user.followed } : user;
            }),
            totalCount: currentUser
               ? currentUser.followed
                  ? state.totalCount - 1
                  : state.totalCount + 1
               : state.totalCount,
         };
      default:
         return state;
   }
};

export default profile;
