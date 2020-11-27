import { SET_FRIENDS, SET_FRIENDS_PAGE } from '../actions/types';

export const initialState = {
   items: [],
   totalCount: 0,
   pageSize: 10,
   currentPage: 1,
   isLoading: false,
};

const profile = (state = initialState, action) => {
   switch (action.type) {
      case SET_FRIENDS:
         return {
            ...state,
            items: [...action.payload.items],
            totalCount: action.payload.totalCount,
         };
      case SET_FRIENDS_PAGE:
         return {
            ...state,
            currentPage: action.payload,
         };
      default:
         return state;
   }
};

export default profile;
