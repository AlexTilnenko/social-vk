import { combineReducers } from 'redux';

import profile from './profile';
import posts from './posts';
import messanger from './messanger';
import users from './users';
import auth from './auth';
import app from './app';
import friends from './friends';

const rootReducer = combineReducers({
   profile,
   posts,
   messanger,
   users,
   auth,
   app,
   friends,
});

export default rootReducer;
