import React, { useState } from 'react';
import Post from './Post/Post';
import { useDispatch } from 'react-redux';
import { addPost, deletePost, likePost } from '../../../actions/posts';
import PropTypes from 'prop-types';

const MyPosts = React.memo(function MyPosts({ posts, avatar, userId, myId, status, name }) {
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
         {myId === userId && (
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
         )}
         {userId === myId ? (
            <div className="my-posts_body">
               {posts.map((post) => {
                  return (
                     <Post
                        post={post}
                        avatar={avatar}
                        key={post.id}
                        onDeletePost={onDeletePost}
                        onLikePost={onLikePost}
                        name={name}
                        status={status}
                        myId={myId}
                        userId={userId}
                     />
                  );
               })}
            </div>
         ) : (
            <div>
               <div>
                  {status && (
                     <Post
                        post={posts[posts.length - 1]}
                        avatar={avatar}
                        onDeletePost={onDeletePost}
                        onLikePost={onLikePost}
                        name={name}
                        status={status}
                        myId={myId}
                        userId={userId}
                     />
                  )}
               </div>
               <div>
                  {avatar && (
                     <Post
                        post={posts[posts.length - 2]}
                        avatar={avatar}
                        onDeletePost={onDeletePost}
                        onLikePost={onLikePost}
                        name={name}
                        myId={myId}
                        userId={userId}
                     />
                  )}
               </div>
               {status || avatar ? '' : <div className="block post">{`${name} пока ничем не поделился(-лась)...`}</div>}
            </div>
         )}
      </div>
   );
});

MyPosts.propTypes = {
   posts: PropTypes.array.isRequired,
   avatar: PropTypes.string,
};

export default MyPosts;
