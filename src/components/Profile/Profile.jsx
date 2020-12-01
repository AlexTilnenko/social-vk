import React, { useEffect } from 'react';
import { compose } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import ProfileStatus from './ProfileStatus/ProfileStatus';
import ProfilePhoto from './ProfilePhoto/ProfilePhoto';
import MyPosts from './MyPosts/MyPosts';
import Loader from '../common/Loader/Loader';
import withAuthRedirect from '../hoc/withAuthRedirect';
import withFollowUnfollow from '../hoc/withFollowUnfollow';
import { fetchFriends } from '../../actions/friends';
import { fetchUserProfile } from '../../actions/profile';
import { selectProfileData, selectActivePosts } from '../../selectors/profileSelectors';
import { selectFriendsData } from '../../selectors/friendsSelectors';
import { selectAuthUserId } from '../../selectors/authSelectors';

import photoHolder from '../../assets/img/user.png';

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
      isFetching,
   } = useSelector(selectProfileData);
   const posts = useSelector(selectActivePosts);
   const myId = useSelector(selectAuthUserId);
   const { items, totalCount } = useSelector(selectFriendsData);
   const visibleFriendsCount = 9;
   useEffect(() => {
      if (userId !== myId || props.match.params.userId) {
         dispatch(fetchUserProfile(props.match.params.userId || myId));
      }

      if (items.length < visibleFriendsCount) dispatch(fetchFriends(null, visibleFriendsCount, '', true));
   }, [props.match.params.userId]); // eslint-disable-line react-hooks/exhaustive-deps

   return (
      <div className="profile">
         {isFetching ? (
            <Loader />
         ) : (
            <>
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
                        <li className="profile__info-item">
                           <span>В поисках работы?</span>
                           {lookingForAJob ? 'Да!' : 'Уже работаю (:'}
                        </li>
                        {lookingForAJob && (
                           <li className="profile__info-item">
                              <span>Несколько слов работодателю:</span>
                              {lookingForAJobDescription ||
                                 'React, Redux, Hooks, axios, classnames, React thunk, RESTApi, Jest'}
                           </li>
                        )}
                        <li className="profile__info-item">
                           <span>Контакты:</span>
                           <a
                              href={contacts.mainLink && `${contacts.mainLink}`}
                              rel="noopener noreferrer"
                              target="_blank"
                           >
                              {contacts.mainLink || 'google.com'}
                           </a>
                        </li>
                     </ul>
                  </div>
                  <ProfilePhoto userId={userId} myId={myId} photos={photos} fullName={fullName} />
               </div>
               <div className="profile__bottom">
                  <MyPosts
                     posts={posts}
                     avatar={photos.large}
                     status={status}
                     userId={userId}
                     myId={myId}
                     name={fullName}
                  />
                  {userId === myId && (
                     <div className="profile__subscriptions block">
                        <Link to="/friends">
                           <div className="profile__subscriptions-count">{`Подписки  ${totalCount}`}</div>
                        </Link>
                        {items.slice(0, 9).map(({ id, name, photos }, index) => {
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
            </>
         )}
      </div>
   );
}

export default compose(withRouter, withAuthRedirect, withFollowUnfollow)(Profile);
