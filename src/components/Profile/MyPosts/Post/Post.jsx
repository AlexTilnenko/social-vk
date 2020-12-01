import React from 'react';
import PropTypes from 'prop-types';

import sprite from '../../../../assets/img/sprite.svg';
import photoHolder from '../../../../assets/img/user.png';

const Post = React.memo(function Post({ post, avatar, onDeletePost, onLikePost, name, status, myId, userId }) {
   const { id, text, description, likeCount, liked } = post;
   if (avatar) {
   }
   return (
      <div className="block post">
         <div className="post__author">
            <div className="post__author-img avatar">
               <img src={avatar || photoHolder} alt="Alex" />
            </div>
            <div className="post__author-name">{name}</div>
         </div>
         <div className="post__body">
            <div className="post__description">{`${name} ${description}`}</div>
            {description === 'обновил(-а) фотографию' && avatar && (
               <div className="post__img">
                  <img src={avatar} alt={name} />
               </div>
            )}
            {description === 'поделился(-лась) новым статусом' && status && (
               <div className="post__status">{status}</div>
            )}
            {description === 'запостил(-а) что-то интересное' && <div className="post__text">{text}</div>}
         </div>
         <button className="btn btn--like" onClick={() => onLikePost(id)}>
            <span>{likeCount}&nbsp;</span>
            <svg className={liked ? 'liked' : ''}>
               <use href={sprite + '#like'} />
            </svg>
         </button>

         {myId === userId && (
            <button className="btn btn--remove-post" onClick={() => onDeletePost(id)}>
               <svg>
                  <use href={sprite + '#trash'} />
               </svg>
            </button>
         )}
      </div>
   );
});

Post.propTypes = {
   post: PropTypes.object.isRequired,
   avatar: PropTypes.string,
   onDeletePost: PropTypes.func,
   onLikePost: PropTypes.func,
};

export default Post;
