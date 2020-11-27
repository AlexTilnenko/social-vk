import { SET_PROFILE, SET_USER_STATUS, SET_USER_PHOTOS } from '../actions/types';

export const initialState = {
   userId: null,
   aboutMe: null,
   photos: {
      small: null,
      large: null,
   },
   fullName: null,
   lookingForAJob: null,
   lookingForAJobDescription: null,
   contacts: {
      github: null,
   },
   status: '',
};

const profile = (state = initialState, action) => {
   switch (action.type) {
      case SET_PROFILE:
         return {
            ...state,
            ...action.payload,
         };
      case SET_USER_STATUS: {
         const newStatusText = action.payload ? action.payload.trim() : '';
         return {
            ...state,
            status: newStatusText,
         };
      }
      case SET_USER_PHOTOS:
         return {
            ...state,
            photos: action.payload,
         };
      default:
         return state;
   }
};

export default profile;
