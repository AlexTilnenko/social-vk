import {SET_ACTIVE_DIALOG, SEND_MESSAGE, CHANGE_NEW_MESSAGE} from './types';

export const setActiveDialog = (id) => ({
   type: SET_ACTIVE_DIALOG,
   activeDialogId: id
});

export const sendMessage = () => ({
   type: SEND_MESSAGE
});

export const changeeNewMessage = (value) => ({
   type: CHANGE_NEW_MESSAGE,
   messageValue: value
});