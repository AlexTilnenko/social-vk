import React from 'react';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import BtnFollowUnfollow from '../../common/BtnFollowUnfollow/BtnFollowUnfollow';
import withFollowUnfollow from '../../hoc/withFollowUnfollow';

import photoHolder from '../../../assets/img/user.png';

function Friend({ id, name, status, img, followed, followHandler, unfollowHandler }) {
   return (
      <div className="friend">
         <Link to={`/profile/${id}`}>
            <div className="friend__info">
               <div className="friend__img">
                  <img src={img || photoHolder} alt="name" />
               </div>
               <div className="friend__text">
                  <div className="friend__name">{name}</div>
                  <div className="friend__status">{status || 'Скоро тут будет статус'}</div>
               </div>
            </div>
         </Link>
         <BtnFollowUnfollow
            id={id}
            followed={followed}
            followHandler={followHandler}
            unfollowHandler={unfollowHandler}
         />
      </div>
   );
}

Friend.propTypes = {
   id: PropTypes.number.isRequired,
   img: PropTypes.string,
   name: PropTypes.string,
   status: PropTypes.string,
   followed: PropTypes.bool,
   followHandler: PropTypes.func.isRequired,
   unfollowHandler: PropTypes.func.isRequired,
};

export default compose(withFollowUnfollow)(Friend);
