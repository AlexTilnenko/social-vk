import {SET_POSTS, ADD_POST, DELETE_POST, TOGGLE_LIKE_POST} from './types';

export const setPosts = (posts) => ({
   type: SET_POSTS,
   posts
});

export const addPost = (value) => ({
   type: ADD_POST,
   newPostValue: value
});

export const deletePost = (id) => ({
   type: DELETE_POST,
   id
});

export const likePost = (id) => ({
   type: TOGGLE_LIKE_POST,
   id
});