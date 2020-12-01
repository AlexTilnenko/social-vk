import { profileApi } from '../api/api';
import { SET_PROFILE, SET_USER_STATUS, SET_USER_PHOTOS, SET_PROFILE_FETCHING, SET_USER_CONTACTS_LINK } from './types';

export const setProfile = (profileData) => ({
   type: SET_PROFILE,
   payload: profileData,
});

export const setProfileFetching = (isFetching) => ({
   type: SET_PROFILE_FETCHING,
   payload: isFetching,
});

export const setUserStatus = (userStatus) => ({
   type: SET_USER_STATUS,
   payload: userStatus,
});

export const setUserPhotos = (photos) => ({
   type: SET_USER_PHOTOS,
   payload: photos,
});

export const setUserContactsLink = (linkName, isAdd) => ({
   type: SET_USER_CONTACTS_LINK,
   payload: {
      linkName,
      isAdd,
   },
});

export const fetchUserProfile = (userId) => async (dispatch) => {
   dispatch(setProfileFetching(true));
   const userProfileResp = await profileApi.getUserProfile(userId);
   dispatch(setProfile(userProfileResp));
   const userStatusResp = await profileApi.getUserStatus(userId);
   dispatch(setUserStatus(userStatusResp));
   dispatch(setProfileFetching(false));
};

export const updateUserProfile = (userId, profileData, onSuccess, onError) => async (dispatch) => {
   dispatch(setProfileFetching(true));
   const resp = await profileApi.putUserProfile(userId, profileData);
   if (resp.data.resultCode === 0) {
      dispatch(setProfile({ userId, ...profileData }));
      onSuccess('Данные успешно сохранены!');
   } else {
      onError('Что-то пошло не так, пожалуйста попробуйте позже.');
   }
   dispatch(setProfileFetching(false));
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
