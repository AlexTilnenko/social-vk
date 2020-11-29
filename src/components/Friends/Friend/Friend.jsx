import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import photoHolder from '../../../assets/img/user.png';

function Friend({ img, name, id, status, followed, onClickFollow, onClickUnfollow }) {
   return (
      <div className="friend">
         <Link to={`/profile/${id}`}>
            <div className="friend__info">
               <div className="friend__img">
                  <img src={img || photoHolder} alt="name" />
               </div>
               <div className="friend__text">
                  <div className="friend__name">{name}</div>
                  <div className="friend__status">{status || 'Пользователь пока не добавил статус'}</div>
               </div>
            </div>
         </Link>
         <button
            className={classNames('btn', { 'btn--unfollow': followed, 'btn--follow': !followed })}
            onClick={followed ? () => onClickUnfollow(id) : () => onClickFollow(id)}
         >
            {followed ? 'Отписаться' : 'Подписаться'}
         </button>
      </div>
   );
}

export default Friend;
