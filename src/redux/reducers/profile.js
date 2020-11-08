import { SET_PROFILE, SET_USER_STATUS, SET_NEW_STATUS, SAVE_NEW_STATUS } from '../actions/types';

const initialState = {
   userId: 1,
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
   newStatus: '',
};

const profile = (state = initialState, action) => {
   switch (action.type) {
      case SET_PROFILE:
         return {
            ...state,
            ...action.payload,
         };
      case SET_USER_STATUS:
         return {
            ...state,
            status: action.payload || '',
            newStatus: action.payload || '',
         };
      case SET_NEW_STATUS:
         return {
            ...state,
            newStatus: action.payload.trim() && action.payload,
         };
      case SAVE_NEW_STATUS:
         return {
            ...state,
            status: action.payload.trim() && action.payload,
         };
      default:
         return state;
   }
};

export default profile;
