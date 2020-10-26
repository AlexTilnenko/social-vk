import axios from 'axios'
const _apibase = 'https://social-network.samuraijs.com/api/1.0'

export const setAuthUserData = (userId, email, login, resultCode) => ({
   type: 'SET_AUTH_USER_DATA',
   data: {userId, email, login, resultCode}
});

export const fetchAuthUserData = () => (dispatch) => {
   axios.get(`${_apibase}/auth/me`, {withCredentials: true})
   .then(resp => {
      const {id, email, login} = resp.data.data;
      dispatch(setAuthUserData(id, email, login, resp.data.resultCode))   
   })
   .catch((e) => {
      console.log(e);
   })
};