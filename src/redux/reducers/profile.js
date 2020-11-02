import {SET_PROFILE} from '../actions/types';

const initialState = {
   userId: 1,
   aboutMe: 'Изучаю React',
   photos: {
      small: null,
      large: 'https://sites.google.com/site/ridkisnitvarini16/_/rsrc/1523859094694/home/zubr/velika-panda/%D0%BF%D0%B0%D0%BD%D0%B4%D0%B0_1.jpg',
   },
   fullName: 'Александр Тильненко',
   lookingForAJob: true,
   lookingForAJobDescription: 'React, Redux, Hooks, axios, classnames, React thunk',
   contacts: {
      github: 'https://github.com/AlexTilnenko',
   },
}

const profile = (state = initialState, action) => {
   switch(action.type) {
      case SET_PROFILE:
         return {
            ...state,
            ...action.profileData
         };
      default:
         return state;
   }
}

export default profile;