import { SET_ACTIVE_DIALOG, SEND_MESSAGE, CHANGE_NEW_MESSAGE } from './types';

export const setActiveDialog = (activeDialogId) => ({
   type: SET_ACTIVE_DIALOG,
   payload: activeDialogId,
});

export const sendMessage = () => ({
   type: SEND_MESSAGE,
});

export const changeNewMessage = (messageValue) => ({
   type: CHANGE_NEW_MESSAGE,
   payload: messageValue,
});
