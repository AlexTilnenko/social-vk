import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { updateUserStatus } from '../../../actions/profile';
import Loader from '../../common/Loader/Loader';

const ProfileStatus = React.memo(function ProfileStatus({ status, userId, myId }) {
   const dispatch = useDispatch();
   const statusRef = useRef();

   const [editStatus, setEditStatus] = useState(false);
   const [isFetching, setIsFetching] = useState(false);
   const [newStatus, setNewStatus] = useState(status);

   useEffect(() => {
      document.body.addEventListener('mousedown', outsideClickHandle);
      return () => {
         document.body.removeEventListener('mousedown', outsideClickHandle);
      };
   }, []);

   useEffect(() => {
      if (status !== newStatus) {
         setNewStatus(status.trim());
      }
      setIsFetching(false);
   }, [status]); // eslint-disable-line react-hooks/exhaustive-deps

   const outsideClickHandle = (e) => {
      const path = e.path || (e.composedPath && e.composedPath());
      if (!path.includes(statusRef.current)) {
         setEditStatus(false);
      }
   };

   const saveStatus = (newStatus) => {
      if (newStatus) {
         if (newStatus !== status) {
            dispatch(updateUserStatus(newStatus));
            setIsFetching(true);
         }
         setEditStatus(false);
      } else {
         alert('Введите текст статуса!');
      }
   };

   const onStatusChange = (e) => {
      setNewStatus(e.target.value);
   };

   if (isFetching) {
   }

   return (
      <div className="profile-status">
         {userId === myId ? (
            <div className="profile-status__inner">
               <div className="profile-status__label">
                  {isFetching ? (
                     <Loader />
                  ) : (
                     <div className="profile-status__field" onClick={() => setEditStatus(true)}>
                        {status || 'Нажмите что бы добавить статус'}
                        {status && <div className="profile-status__message">Нажмите что бы изменить статус</div>}
                     </div>
                  )}
               </div>
               <div className={classNames('profile-status__edit', { active: editStatus })} ref={statusRef}>
                  <div className="profile-status__title">Введите текст нового статуса</div>
                  <input
                     autoFocus
                     type="text"
                     className="profile-status__input"
                     value={newStatus}
                     onChange={onStatusChange}
                  />
                  <button className="btn btn--status-save" onClick={() => saveStatus(newStatus)}>
                     Сохранить
                  </button>
               </div>
            </div>
         ) : (
            <div className="profile-status__label">{status || 'Скоро тут будет статус...'}</div>
         )}
      </div>
   );
});

ProfileStatus.propTypes = {
   status: PropTypes.string,
   userId: PropTypes.number,
   myId: PropTypes.number.isRequired,
};

export default ProfileStatus;
