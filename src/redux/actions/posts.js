export const setPosts = (posts) => ({
   type: 'SET_POSTS',
   payload: posts
});

export const addPost = (value) => ({
   type: 'ADD_POST',
   payload: value
});

export const deletePost = (id) => ({
   type: 'DELETE_POST',
   payload: id
});

export const likePost = (id) => ({
   type: 'TOGGLE_LIKE_POST',
   payload: id
});