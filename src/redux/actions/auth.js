import { authApi, securityApi } from '../../api/api';
import { SET_AUTH_USER_DATA, SET_AUTH_CAPTCHA_URL } from './types';

export const setAuthUserData = (userId, email, login, isAuth) => ({
   type: SET_AUTH_USER_DATA,
   payload: { userId, email, login, isAuth },
});

export const fetchAuthUserData = () => async (dispatch) => {
   await authApi
      .getAuthUserData()
      .then((resp) => {
         const { id, email, login } = resp.data;
         dispatch(setAuthUserData(id, email, login, resp.resultCode === 0 ? true : false));
      })
      .catch((e) => {
         console.log(e);
      });
};

export const setAuthCaptchaUrl = (authCaptchaUrl) => ({
   type: SET_AUTH_CAPTCHA_URL,
   payload: authCaptchaUrl,
});

export const fetchAuthCaptchaUrl = () => async (dispatch) => {
   await securityApi.getCaptchaUrl().then((resp) => {

      dispatch(setAuthCaptchaUrl(resp));
   });
};

export const login = (loginData, onSuccess, onError) => async (dispatch) => {
   await authApi
      .login(loginData)
      .then((resp) => {
         switch (resp.resultCode) {
            case 0:
               dispatch(fetchAuthUserData());
               onSuccess();
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
      })
      .catch((e) => console.log(e));
};

export const logout = () => async (dispatch) => {
   await authApi
      .logout()
      .then((resp) => {
         if (resp.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
         }
      })
      .catch((e) => console.log(e));
};
