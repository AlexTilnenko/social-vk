import profile, { initialState } from '../../reducers/profile';
import * as t from '../../actions/types';

//=========Data==================
const profileData = {
   userId: 12045,
   aboutMe: 'sfggfhhtgtyhg',
   photos: {
      small: 'some url',
      large: null,
   },
   fullName: 'Alex_Tilnenko',
   lookingForAJob: true,
   lookingForAJobDescription: 'stack: react, redux, axios, thunk, jest',
   contacts: {
      github: 'link',
   },
   status: 'some status',
};

const status = 'some awesome status';

describe('profile reducer', () => {
   it('should return initial state', () => {
      expect(profile(undefined, {})).toEqual(initialState);
   });
   it('should handle SET_PROFILE', () => {
      const action = {
         type: t.SET_PROFILE,
         payload: profileData,
      };
      const expectedState = {
         ...initialState,
         ...profileData,
      };
      expect(profile(initialState, action)).toEqual(expectedState);
   });
   it('should handle SET_USER_STATUS', () => {
      const action = {
         type: t.SET_USER_STATUS,
         payload: status,
      };
      const expectedState = {
         ...initialState,
         status,
      };
      expect(profile(initialState, action)).toEqual(expectedState);
   });
});
