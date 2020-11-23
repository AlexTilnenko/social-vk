import { SET_INITIALIZED } from '../actions/types';

export const initialState = {
   initialized: false,
};

const initialisation = (state = initialState, action) => {
   switch (action.type) {
      case SET_INITIALIZED:
         return {
            ...state,
            initialized: true,
         };
      default:
         return state;
   }
};

export default initialisation;
