import { SET_POSTS, ADD_POST, DELETE_POST, TOGGLE_LIKE_POST } from './types';

export const setPosts = (posts) => ({
   type: SET_POSTS,
   payload: posts,
});

export const addPost = (newPostValue) => ({
   type: ADD_POST,
   payload: newPostValue,
});

export const deletePost = (id) => ({
   type: DELETE_POST,
   payload: id,
});

export const likePost = (id) => ({
   type: TOGGLE_LIKE_POST,
   payload: id,
});
