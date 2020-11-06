import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setNewStatus, putUserStatus } from '../../../redux/actions/profile';
function ProfileStatus({ status, newStatus }) {
   const [editStatus, setEditStatus] = useState(false);
   const dispatch = useDispatch();
   const statusRef = useRef();

   useEffect(() => {
      document.body.addEventListener('click', outsideClickHandle);
   }, []);

   const activateEditStatus = () => {
      setEditStatus(true);
   };

   const saveStatus = (newStatus) => {
      dispatch(putUserStatus(newStatus));
      setEditStatus(false);
   };

   const outsideClickHandle = (e) => {
      const path = e.path || (e.composedPath && e.composedPath());
      if (!path.includes(statusRef.current)) {
         setEditStatus(false);
      }
   };

   const onStatusChange = (e) => {
      dispatch(setNewStatus(e.target.value));
   };
   return (
      <div className="profile-status">
         {!editStatus ? (
            <div className="profile-status__label" onClick={activateEditStatus}>
               {status ? status : 'Нажмите что бы добавить статус'}
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
         )}
      </div>
   );
}

export default ProfileStatus;
