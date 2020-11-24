import { profileApi } from '../api/api';
import { SET_PROFILE, SET_USER_STATUS } from './types';

export const setProfile = (profileData) => ({
   type: SET_PROFILE,
   payload: profileData,
});

export const setUserStatus = (userStatus) => ({
   type: SET_USER_STATUS,
   payload: userStatus,
});

export const fetchUserProfile = (userId) => async (dispatch) => {
   const userProfileResp = await profileApi.getUserProfile(userId);
   dispatch(setProfile(userProfileResp));
   const userStatusResp = await profileApi.getUserStatus(userId);
   dispatch(setUserStatus(userStatusResp));
};

export const updateUserStatus = (statusValue) => async (dispatch) => {
   const resp = await profileApi.putUserStatus(statusValue);
   if (resp.data.resultCode === 0) {
      dispatch(setUserStatus(statusValue));
   }
};
