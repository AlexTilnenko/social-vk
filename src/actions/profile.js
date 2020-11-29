import { profileApi } from '../api/api';
import { SET_PROFILE, SET_USER_STATUS, SET_USER_PHOTOS } from './types';

export const setProfile = (profileData) => ({
   type: SET_PROFILE,
   payload: profileData,
});

export const setUserStatus = (userStatus) => ({
   type: SET_USER_STATUS,
   payload: userStatus,
});

export const setUserPhotos = (photos) => ({
   type: SET_USER_PHOTOS,
   payload: photos,
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

export const updateUserPhoto = (photo) => async (dispatch) => {
   const resp = await profileApi.putUserPhoto(photo);
   if (resp.resultCode === 0) {
      dispatch(setUserPhotos(resp.data.photos));
   }
};
