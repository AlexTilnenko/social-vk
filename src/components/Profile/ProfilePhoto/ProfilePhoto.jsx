import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserPhoto } from '../../../actions/profile';
import Loader from '../../common/Loader/Loader';

import photoHolder from '../../../assets/img/user.png';

function ProfilePhoto({ userId, myId, photos, fullName }) {
   const dispatch = useDispatch();
   const [isFetching, setIsFetching] = useState(false);

   useEffect(() => {
      setIsFetching(false);
   }, [photos]);

   const onPhotoChange = (e) => {
      if (e.target.files) {
         setIsFetching(true);
         dispatch(updateUserPhoto(e.target.files[0]));
      }
   };
   return (
      <div className="profile__photo block">
         {isFetching ? (
            <Loader />
         ) : (
            <div className="profile__img">
               <img src={photos.large || photoHolder} alt={fullName} />
            </div>
         )}
         {userId === myId && (
            <div className="update-photo">
               <label htmlFor="update-photo" className="update-photo__label">
                  Обновить фотографию
               </label>
               <input className="update-photo__input" id="update-photo" type="file" onChange={onPhotoChange} />
            </div>
         )}
      </div>
   );
}

export default ProfilePhoto;
