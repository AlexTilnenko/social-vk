import React from 'react';
import classNames from 'classnames';

function BtnFollowUnfollow({ id, followed, unfollowHandler, followHandler, followingInProgress }) {
   return (
      <button
         className={classNames('btn', { 'btn--unfollow': followed, 'btn--follow': !followed })}
         onClick={followed ? () => unfollowHandler(id) : () => followHandler(id)}
         disabled={followingInProgress && followingInProgress.some((item) => item === id)}
      >
         {followed ? 'Отписаться' : 'Подписаться'}
      </button>
   );
}

export default BtnFollowUnfollow;
