import {SET_POSTS, ADD_POST, DELETE_POST, TOGGLE_LIKE_POST} from '../actions/types';

const initialState = {
   activePosts: [
      {
         id: 1,
         text: 'Some interesting post',
         likeCount: 0,
         liked: false
      },
      {
         id: 2,
         text: 'Some post about pandas',
         likeCount: 1,
         liked: true
      }
   ]
}

const posts = (state = initialState, action) => {
   switch(action.type) {
      case SET_POSTS:
         return state;
      case ADD_POST:
         const newPost = {
            id: Date.now(),
            text: action.payload,
            likeCount: 0,
            liked: false,
         };
         return {
            ...state,
            activePosts: [newPost, ...state.activePosts],

         }
      case DELETE_POST:{
         return {
            ...state,
            activePosts: state.activePosts.filter(post => post.id !== action.payload )
         }
      }
      case TOGGLE_LIKE_POST:{
         return {
            ...state,
            activePosts: state.activePosts.map(post => {
               if (post.id === action.payload && !post.liked) {
                  return {
                     ...post,
                     likeCount: ++post.likeCount,
                     liked: true
                  }
               } else if (post.id === action.payload && post.liked) {
                  return {
                     ...post,
                     likeCount: --post.likeCount,
                     liked: false
                  } 
               } else {
                  return post;
               }
            })
         }
      }
      default:
         return state;
   }
}

export default posts;