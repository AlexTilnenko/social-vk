import { fetchAuthUserData } from './auth';
import { fetchUserProfile } from './profile';
import { SET_INITIALIZED } from './types';

export const setInitialized = () => ({
   type: SET_INITIALIZED,
});

export const initialize = () => async (dispatch) => {
   await dispatch(fetchAuthUserData());
   await dispatch(fetchUserProfile(12045));
   dispatch(setInitialized());
};
