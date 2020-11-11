import { authApi, loginApi } from '../../api/api';
import { SET_AUTH_USER_DATA } from './types';

export const setAuthUserData = (userId, email, login, resultCode) => ({
   type: SET_AUTH_USER_DATA,
   payload: { userId, email, login, resultCode },
});

export const fetchAuthUserData = () => (dispatch) => {
   authApi
      .getAuthUserData()
      .then((resp) => {
         const { id, email, login } = resp.data;
         dispatch(setAuthUserData(id, email, login, resp.resultCode));
      })
      .catch((e) => {
         console.log(e);
      });
};

export const login = (loginData) => (dispatch) => {
   loginApi
      .login(loginData)
      .then((resp) => {
         console.log(resp);
         if (resp.resultCode === 0) {
         dispatch(fetchAuthUserData());
         }
      })
      .catch((e) => console.log(e));
};
