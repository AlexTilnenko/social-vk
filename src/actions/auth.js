import { authApi, securityApi } from '../api/api';
import { SET_AUTH_USER_DATA, SET_AUTH_CAPTCHA_URL } from './types';

export const setAuthUserData = (userId, email, login, isAuth) => ({
   type: SET_AUTH_USER_DATA,
   payload: { userId, email, login, isAuth },
});

export const setAuthCaptchaUrl = (authCaptchaUrl) => ({
   type: SET_AUTH_CAPTCHA_URL,
   payload: authCaptchaUrl,
});

export const fetchAuthCaptchaUrl = () => async (dispatch) => {
   const resp = await securityApi.getCaptchaUrl();
   dispatch(setAuthCaptchaUrl(resp));
};

export const fetchAuthUserData = () => async (dispatch) => {
   const resp = await authApi.getAuthUserData();
   const { id, email, login } = resp.data;
   dispatch(setAuthUserData(id, email, login, resp.resultCode === 0 ? true : false));
};

export const login = (loginData, onError) => async (dispatch) => {
   const resp = await authApi.login(loginData);
   switch (resp.resultCode) {
      case 0:
         dispatch(fetchAuthUserData());
         break;
      case 1:
         onError('Неверный логин или пароль!');
         break;
      case 10:
         dispatch(fetchAuthCaptchaUrl());
         break;
      default:
         onError('Что-то пошло не так...');
   }
};

export const logout = () => async (dispatch) => {
   const resp = await authApi.logout();
   if (resp.resultCode === 0) {
      dispatch(setAuthUserData(null, null, null, false));
   }
};
