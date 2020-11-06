import { profileApi } from '../../api/api';
import { SET_PROFILE, SET_USER_STATUS, SET_NEW_STATUS, SAVE_NEW_STATUS } from './types';

export const setProfile = (profileData) => ({
   type: SET_PROFILE,
   payload: profileData,
});

export const fetchUserProfile = (userId) => (dispatch) => {
   profileApi
      .getUserProfile(userId)
      .then((resp) => {
         dispatch(setProfile(resp));
      })
      .catch((e) => {
         console.log(e);
      });
   profileApi.getUserStatus(userId).then((resp) => {
      dispatch(setUserStatus(resp));
   });
};

export const setUserStatus = (userStatus) => ({
   type: SET_USER_STATUS,
   payload: userStatus,
});

export const setNewStatus = (statusValue) => ({
   type: SET_NEW_STATUS,
   payload: statusValue,
});

export const saveNewStatus = (statusValue) => ({
   type: SAVE_NEW_STATUS,
   payload: statusValue,
});

export const putUserStatus = (statusValue) => (dispatch) => {
   profileApi
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
