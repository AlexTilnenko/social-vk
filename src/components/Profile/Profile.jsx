import React, { useEffect } from 'react';
import MyPosts from '../../components/Profile/MyPosts/MyPosts';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchUserProfile } from '../../redux/actions/profile';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';

import photoHolder from '../../assets/img/user.png';
import ProfileStatus from './ProfileStatus/ProfileStatus';

function Profile(props) {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(fetchUserProfile(props.match.params.userId));
   }, []); // eslint-disable-line react-hooks/exhaustive-deps

   const {
      fullName,
      aboutMe,
      lookingForAJob,
      lookingForAJobDescription,
      contacts,
      photos,
      status,
      newStatus,
   } = useSelector((state) => state.profile);

   const posts = useSelector((state) => state.posts.activePosts);
   return (
      <div className="profile">
         <div className="profile__header">
            <div className="block profile__info">
               <ul className="profile__info-list">
                  <li className="profile__info-item profile__info--name">{fullName}</li>
                  <li className="profile__info-item">
                     <ProfileStatus status={status} newStatus={newStatus} />
                  </li>
                  <li className="profile__info-item">
                     <span>Обо мне:</span>
                     {aboutMe || 'Изучаю React'}
                  </li>
                  <li className="profile__info-item">
                     {lookingForAJob ? 'В поисках работы' : 'Работаю в Google'}
                  </li>
                  <li className="profile__info-item">
                     <span>Stack:</span>
                     {lookingForAJobDescription ||
                        'React, Redux, Hooks, axios, classnames, React thunk'}
                  </li>
                  <li className="profile__info-item">
                     <span>Контакты:</span>
                     <a
                        href={contacts.github && `${contacts.github}`}
                        rel="noopener noreferrer"
                        target="_blank"
                     >
                        {contacts.github || 'не сижу в соц.сетях'}
                     </a>
                  </li>
               </ul>
            </div>
            <div className="block profile__photo">
               <img src={photos.large || photoHolder} alt={fullName} />
            </div>
         </div>

         <MyPosts posts={posts} avatar={photos.large || photoHolder} />
      </div>
   );
}

export default compose(withRouter, withAuthRedirect)(Profile);
