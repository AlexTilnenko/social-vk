export const setPosts = (data) => ({
   type: 'SET_POSTS',
   payload: data
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
   type: 'LIKE_POST',
   payload: id
});