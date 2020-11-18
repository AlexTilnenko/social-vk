import { profileApi } from '../api/api';
import { SET_PROFILE, SET_USER_STATUS, SAVE_NEW_STATUS } from './types';

export const setProfile = (profileData) => ({
   type: SET_PROFILE,
   payload: profileData,
});

export const fetchUserProfile = (userId) => async (dispatch) => {
   await profileApi
      .getUserProfile(userId)
      .then((resp) => {
         dispatch(setProfile(resp));
      })
      .catch((e) => {
         console.log(e);
      });
   await profileApi.getUserStatus(userId).then((resp) => {
      dispatch(setUserStatus(resp));
   });
};

export const setUserStatus = (userStatus) => ({
   type: SET_USER_STATUS,
   payload: userStatus,
});

export const saveNewStatus = (statusValue) => ({
   type: SAVE_NEW_STATUS,
   payload: statusValue,
});

export const updateUserStatus = (statusValue) => async (dispatch) => {
   await profileApi
      .putUserStatus(statusValue)
      .then((resp) => {
         if (resp.data.resultCode === 0) {
            dispatch(saveNewStatus(statusValue));
         }
      })
      .catch((e) => {
         console.log(e);
      });
};
