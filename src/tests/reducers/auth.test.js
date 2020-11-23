import auth, { initialState } from '../../reducers/auth';
import * as t from '../../actions/types';

const authData = {
   userId: 12045,
   email: 'alex.tilnenko@gmail.com',
   login: 'Alex_Tilnenko',
   isAuth: true,
};

const captchaUrl = 'someCaptchaUrl';
describe('Auth reducer', () => {
   it('should return the initial state', () => {
      expect(auth(undefined, {})).toEqual(initialState);
   });
   it('should handle SET_AUTH_CAPTCHA_URL', () => {
      const action = { type: t.SET_AUTH_CAPTCHA_URL, payload: captchaUrl };
      const expectedState = { ...initialState, captchaUrl };
      expect(auth(initialState, action)).toEqual(expectedState);
   });
   it('should handle SET_AUTH_USER_DATA before login', () => {
      const action = {
         type: t.SET_AUTH_USER_DATA,
         payload: authData,
      };
      const expectedState = {
         ...initialState,
         ...authData,
         captchaUrl: '',
      };
      expect(auth(initialState, action)).toEqual(expectedState);
   });
   it('should handle SET_AUTH_USER_DATA before logout', () => {
      const action = {
         type: t.SET_AUTH_USER_DATA,
         payload: {
            userId: null,
            email: null,
            login: null,
            isAuth: false,
         },
      };
      const state = {
         ...initialState,
         ...authData,
         captchaUrl: captchaUrl,
      };
      expect(auth(state, action)).toEqual(initialState);
   });
});
