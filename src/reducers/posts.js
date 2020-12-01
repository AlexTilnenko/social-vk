import { SET_POSTS, ADD_POST, DELETE_POST, TOGGLE_LIKE_POST } from '../actions/types';

const initialState = {
   activePosts: [
      {
         id: 1,
         text: '',
         description: 'обновил(-а) фотографию',
         likeCount: Math.round(Math.random() * 1000),
         liked: true,
      },
      {
         id: 2,
         text: '',
         description: 'поделился(-лась) новым статусом',
         likeCount: Math.round(Math.random() * 1000),
         liked: false,
      },
   ],
};

const posts = (state = initialState, action) => {
   switch (action.type) {
      case SET_POSTS:
         return state;
      case ADD_POST:
         const newPost = {
            id: Date.now(),
            description: 'запостил(-а) что-то интересное',
            text: action.payload,
            likeCount: 0,
            liked: false,
         };
         return {
            ...state,
            activePosts: [newPost, ...state.activePosts],
         };
      case DELETE_POST: {
         return {
            ...state,
            activePosts: state.activePosts.filter((post) => post.id !== action.payload),
         };
      }
      case TOGGLE_LIKE_POST: {
         return {
            ...state,
            activePosts: state.activePosts.map((post) => {
               if (post.id === action.payload && !post.liked) {
                  return {
                     ...post,
                     likeCount: ++post.likeCount,
                     liked: true,
                  };
               } else if (post.id === action.payload && post.liked) {
                  return {
                     ...post,
                     likeCount: --post.likeCount,
                     liked: false,
                  };
               } else {
                  return post;
               }
            }),
         };
      }
      default:
         return state;
   }
};

export default posts;
