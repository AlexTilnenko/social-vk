import { SET_AUTH_USER_DATA } from '../actions/types';

const initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
};

const auth = (state = initialState, action) => {
   switch (action.type) {
      case SET_AUTH_USER_DATA:
         return {
            ...action.payload,
            isAuth: action.payload.resultCode === 0 ? true : false,
         };
      default:
         return state;
   }
};

export default auth;
