import { combineReducers } from 'redux'

import profile from './profile';
import posts from './posts';
import messanger from './messanger';
import users from './users';

const rootReducer = combineReducers({
   profile,
   posts,
   messanger,
   users,
})

export default rootReducer;