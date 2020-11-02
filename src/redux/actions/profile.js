import {profileApi} from '../../api/api';
import {SET_PROFILE} from './types';

export const  setProfile = (data) => ({
   type: SET_PROFILE,
   profileData: data
});

export const fetchUserProfile = (userId) => (dispatch) => {
   profileApi.getUserProfile(userId)
   .then(resp => {
      dispatch(setProfile(resp))
   })
   .catch((e) => {
      console.log(e);
   })
};