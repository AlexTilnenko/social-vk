import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BtnFollowUnfollow from '../common/BtnFollowUnfollow/BtnFollowUnfollow';

import photoHolder from '../../assets/img/user.png';

const User = React.memo(function User({
   id,
   name,
   photos,
   followed,
   followingInProgress,
   followHandler,
   unfollowHandler,
}) {
   return (
      <li className="users__item block" key={id}>
         <Link to={`/profile/${id}`}>
            <span className="users__item-photo">
               <img src={photos.large || photoHolder} alt={name} />
            </span>
            <span className="users__item-name">{name}</span>
         </Link>
         <BtnFollowUnfollow
            id={id}
            followed={followed}
            followHandler={followHandler}
            unfollowHandler={unfollowHandler}
            followingInProgress={followingInProgress}
         />
      </li>
   );
});

User.propTypes = {
   id: PropTypes.number.isRequired,
   name: PropTypes.string,
   photos: PropTypes.object,
   followed: PropTypes.bool,
   followingInProgress: PropTypes.array.isRequired,
   followHandler: PropTypes.func.isRequired,
   unfollowHandler: PropTypes.func.isRequired,
};

export default User;
