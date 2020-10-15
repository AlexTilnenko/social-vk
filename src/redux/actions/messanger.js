export const setActiveDialog = (id) => ({
   type: 'SET_ACTIVE_DIALOG',
   payload: id
});

export const sendMessage = (value) => ({
   type: 'SEND_MESSAGE',
   payload: value
});