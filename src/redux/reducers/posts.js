const initialState = {
   activePosts: [
      {
         id: 1,
         text: 'Some interesting post',
         img: 'https://24tv.ua/resources/photos/news/1200x675_DIR/201811/1064001.jpg?201811172310',
         likeCount: 0,
         liked: false
      },
      {
         id: 2,
         text: 'Some post about pandas',
         img: 'https://www.5.ua/media/pictures/original/14992.jpg',
         likeCount: 1,
         liked: true
      }
   ]
}

const posts = (state = initialState, action) => {
   switch(action.type) {
      case 'SET_POSTS':
         return state;
      case 'ADD_POST':
         const newPost = {
            id: Date.now(),
            text: action.newPostValue,
            img: action.img ? action.img : '',
            likeCount: 0,
            liked: false
         };
         return {
            ...state,
            activePosts: [newPost, ...state.activePosts],

         }
      case 'DELETE_POST':{
         return {
            ...state,
            activePosts: state.activePosts.filter(post => post.id !== action.id )
         }
      }
      case 'TOGGLE_LIKE_POST':{
         return {
            ...state,
            activePosts: state.activePosts.map(post => {
               if (post.id === action.id && !post.liked) {
                  return {
                     ...post,
                     likeCount: ++post.likeCount,
                     liked: true
                  }
               } else if (post.id === action.id && post.liked) {
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