import React from 'react';
import { useSelector } from 'react-redux';
import { setActiveDialog, sendMessage, changeNewMessage } from '../../redux/actions/messanger';
import classNames from 'classnames';
import withAuthRedirect from '../hoc/withAuthRedirect';

import avatar from '../../assets/img/avatar.jpg';
import { compose } from 'redux';

function Messages({ dispatch }) {
   const { dialogs, messages, activeDialogId, newMessage } = useSelector(
      (state) => state.messanger
   );

   const onMessageChange = (e) => {
      dispatch(changeNewMessage(e.target.value));
   };
   const onSendMessage = (e) => {
      e.preventDefault();
      dispatch(sendMessage());
   };

   const onClickDialog = (id) => {
      dispatch(setActiveDialog(id));
   };
   return (
      <div className="messages">
         <div className="messages__list block">
            <div className="messages__list-title">Диалоги</div>
            {dialogs.map((dialog) => {
               const { id, name } = dialog;
               return (
                  <div
                     className={classNames('messages__list-item', {
                        'active-dialog': activeDialogId === id,
                     })}
                     key={id}
                     onClick={() => onClickDialog(id)}
                  >
                     <div className="avatar">
                        <img src={avatar} alt={name} />
                     </div>
                     <span>{name}</span>
                  </div>
               );
            })}
         </div>

         <div className="messages__dialog block">
            <div className="messages__dialog-body">
               {messages[activeDialogId].map((message) => {
                  return (
                     <div
                        className={classNames('message block', {
                           author: message.author === 'Александр',
                        })}
                        key={message.id}
                     >
                        <div className="message__author">{message.author}</div>
                        <div className="message__time">{message.time}</div>
                        <div className="message__text">{message.text}</div>
                     </div>
                  );
               })}
            </div>
            <div className="messages__dialog-form">
               <form className="add-form" onSubmit={onSendMessage}>
                  <input
                     onChange={onMessageChange}
                     value={newMessage}
                     className="add-form-field"
                     type="text"
                     placeholder="Напишите текст сообщения..."
                  />
                  <button className="btn btn--add-form">Отправить</button>
               </form>
            </div>
         </div>
      </div>
   );
}

export default compose(withAuthRedirect)(Messages);
