import { combineReducers } from 'redux'

import profile from './profile';
import posts from './posts';
import messanger from './messanger';
import users from './users';
import auth from './auth';
import initialisation from './initialisation';

const rootReducer = combineReducers({
   profile,
   posts,
   messanger,
   users,
   auth,
   initialisation,
});

export default rootReducer;