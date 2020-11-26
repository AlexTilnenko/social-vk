import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import photoHolder from '../../assets/img/user.png';

const User = React.memo(function User({
   id,
   name,
   photos,
   followed,
   followingInProgress,
   onClickUnfollow,
   onClickFollow,
}) {
   return (
      <li className="users__item block" key={id}>
         <Link to={`/profile/${id}`}>
            <span className="users__item-photo avatar">
               <img src={photos.large || photoHolder} alt={name} />
            </span>
            <span className="users__item-name">{name}</span>
         </Link>
         <button
            className={classNames('btn', { 'btn--unfollow': followed, 'btn--follow': !followed })}
            onClick={followed ? () => onClickUnfollow(id) : () => onClickFollow(id)}
            disabled={followingInProgress.some((item) => item === id)}
         >
            {followed ? 'Вы подписаны' : 'Подписаться'}
         </button>
      </li>
   );
});

export default User;
