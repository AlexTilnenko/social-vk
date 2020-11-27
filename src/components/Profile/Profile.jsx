import React, { useEffect } from 'react';
import { compose } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import MyPosts from './MyPosts/MyPosts';
import withAuthRedirect from '../hoc/withAuthRedirect';
import Friend from '../Friends/Friend/Friend';
import { fetchFriends } from '../../actions/friends';
import { fetchUserProfile, updateUserPhoto } from '../../actions/profile';
import { selectProfileData, selectActivePosts } from '../../selectors/profileSelectors';
import { selectFriendsData } from '../../selectors/friendsSelectors';
import { selectAuthUserId } from '../../selectors/authSelectors';

import photoHolder from '../../assets/img/user.png';
import { Link } from 'react-router-dom';
function Profile(props) {
   const dispatch = useDispatch();
   const {
      userId,
      fullName,
      aboutMe,
      lookingForAJob,
      lookingForAJobDescription,
      contacts,
      photos,
      status,
   } = useSelector(selectProfileData);

   const posts = useSelector(selectActivePosts);
   const myId = useSelector(selectAuthUserId);
   const { items, totalCount } = useSelector(selectFriendsData);

   useEffect(() => {
      dispatch(fetchUserProfile(props.match.params.userId || myId));
      dispatch(fetchFriends(null, 9, '', true));
   }, [props.match.params.userId]); // eslint-disable-line react-hooks/exhaustive-deps

   const onPhotoChange = (e) => {
      if (e.target.files) {
         dispatch(updateUserPhoto(e.target.files[0]));
      }
   };

   return (
      <div className="profile">
         <div className="profile__header">
            <div className="block profile__info">
               <ul className="profile__info-list">
                  <li className="profile__info-item profile__info--name">{fullName}</li>
                  <li className="profile__info-item">
                     <ProfileStatus status={status} userId={userId} myId={myId} />
                  </li>
                  <li className="profile__info-item">
                     <span>Обо мне:</span>
                     {aboutMe || 'Изучаю React'}
                  </li>
                  <li className="profile__info-item">{lookingForAJob ? 'В поисках работы' : 'Работаю в Google'}</li>
                  <li className="profile__info-item">
                     <span>Stack:</span>
                     {lookingForAJobDescription || 'React, Redux, Hooks, axios, classnames, React thunk'}
                  </li>
                  <li className="profile__info-item">
                     <span>Контакты:</span>
                     <a href={contacts.github && `${contacts.github}`} rel="noopener noreferrer" target="_blank">
                        {contacts.github || 'не сижу в соц.сетях'}
                     </a>
                  </li>
               </ul>
            </div>
            <div className="profile__photo block">
               <div className="profile__img">
                  <img src={photos.large || photoHolder} alt={fullName} />
               </div>
               {userId === myId && (
                  <div className="update-photo">
                     <label htmlFor="update-photo" className="update-photo__label">
                        Обновить фотографию
                     </label>
                     <input className="update-photo__input" id="update-photo" type="file" onChange={onPhotoChange} />
                  </div>
               )}
            </div>
         </div>
         <div className="profile__bottom">
            <MyPosts posts={posts} avatar={photos.large || photoHolder} userId={userId} myId={myId} />
            {userId === myId && (
               <div className="profile__subscriptions block">
                  <Link to="/friends">
                     <div className="profile__subscriptions-count">{`Подписки  ${totalCount}`}</div>
                  </Link>
                  {items.map(({ id, name, photos }, index) => {
                     return (
                        <div className="profile-friend" key={`${name}_${index}`}>
                           <Link to={`/profile/${id}`}>
                              <div className="profile-friend__img">
                                 <img src={photos.small || photoHolder} alt={name} />
                              </div>
                              <div className="profile-friend__name">{name}</div>
                           </Link>
                        </div>
                     );
                  })}
               </div>
            )}
         </div>
      </div>
   );
}

export default compose(withRouter, withAuthRedirect)(Profile);
