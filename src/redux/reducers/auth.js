import {SET_AUTH_USER_DATA} from '../actions/types';

const initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: null
}

const auth = (state = initialState, action) => {
   switch(action.type) {
      case SET_AUTH_USER_DATA:
         return {
            ...action.data,
            isAuth: action.data.resultCode === 0 ? true : false
         }
      default:
         return state;
   }
}


export default auth;