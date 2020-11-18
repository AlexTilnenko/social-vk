import React, { useState } from 'react';
import Post from './Post/Post';
import { useDispatch } from 'react-redux';
import { addPost, deletePost, likePost } from '../../../actions/posts';
import PropTypes from 'prop-types';

function MyPosts({ posts, avatar }) {
   const dispatch = useDispatch();

   const [value, setValue] = useState('');

   const updateValue = (e) => {
      setValue(e.target.value);
   };

   const onAddPost = (e) => {
      e.preventDefault();
      if (value.trim()) {
         dispatch(addPost(value));
         setValue('');
      } else {
         alert('Введите текст!');
      }
   };

   const onDeletePost = (id) => {
      dispatch(deletePost(id));
   };

   const onLikePost = (id) => {
      dispatch(likePost(id));
   };

   return (
      <div className="my-posts">
         <form className="block add-form">
            <input
               className="add-form-field"
               type="text"
               placeholder="Что у Вас нового?"
               onChange={updateValue}
               value={value}
            />
            <button className="btn btn--add-form" onClick={onAddPost}>
               Добавить
            </button>
         </form>
         {posts.map((post) => {
            return (
               <Post
                  post={post}
                  avatar={avatar}
                  key={post.id}
                  onDeletePost={onDeletePost}
                  onLikePost={onLikePost}
               />
            );
         })}
      </div>
   );
}

MyPosts.propTypes = {
   posts: PropTypes.array.isRequired,
   avatar: PropTypes.string,
};

export default MyPosts;
