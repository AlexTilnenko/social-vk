import { SET_AUTH_USER_DATA, SET_AUTH_CAPTCHA_URL } from '../actions/types';

const initialState = {
   userId: null,
   email: null,
   login: null,
   isAuth: false,
   captchaUrl: '',
};

const auth = (state = initialState, action) => {
   switch (action.type) {
      case SET_AUTH_USER_DATA:
         return {
            ...state,
            ...action.payload,
            isAuth: action.payload.resultCode === 0 ? true : false,
         };
      case SET_AUTH_CAPTCHA_URL:
         return {
            ...state,
            captchaUrl: action.payload,
         };
      default:
         return state;
   }
};

export default auth;
