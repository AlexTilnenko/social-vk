import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateUserStatus } from '../../../redux/actions/profile';

function ProfileStatus({ status, userId, myId }) {
   const dispatch = useDispatch();
   const statusRef = useRef();

   const [editStatus, setEditStatus] = useState(false);
   const [newStatus, setNewStatus] = useState(status);

   useEffect(() => {
      document.body.addEventListener('click', outsideClickHandle);
      return () => {
         document.body.removeEventListener('click', outsideClickHandle);
      };
   }, []);

   useEffect(() => {
      if (status !== newStatus) {
         setNewStatus(status);
      }
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
         }
         setEditStatus(false);
      } else {
         alert('Введите текст статуса!');
      }
   };

   const onStatusChange = (e) => {
      setNewStatus(e.target.value);
   };

   return (
      <div className="profile-status">
         {userId === myId ? (
            !editStatus ? (
               <div className="profile-status__label" onClick={() => setEditStatus(true)}>
                  {status || 'Нажмите что бы добавить статус'}
               </div>
            ) : (
               <div className="profile-status__edit" ref={statusRef}>
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
            )
         ) : (
            <div className="profile-status__label">
               {status}
            </div>
         )}
      </div>
   );
}

export default ProfileStatus;
