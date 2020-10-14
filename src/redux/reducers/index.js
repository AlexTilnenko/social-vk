import { combineReducers } from 'redux'

import profile from './profile';
import posts from './posts';
import messages from './messages';

const rootReducer = combineReducers({
   profile,
   posts,
   messages,
})

export default rootReducer;