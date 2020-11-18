import { fetchAuthUserData } from './auth';
import { SET_INITIALIZED } from './types';


export const setInitialized = () => ({
   type: SET_INITIALIZED,
});

export const initialize = () => async (dispatch) => {
   await dispatch(fetchAuthUserData());
   dispatch(setInitialized());
}