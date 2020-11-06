import { SET_ACTIVE_DIALOG, SEND_MESSAGE, CHANGE_NEW_MESSAGE } from '../actions/types';

const initialState = {
   dialogs: [
      { id: 1, name: 'Sasha' },
      { id: 2, name: 'Masha' },
   ],
   messages: {
      1: [
         {
            id: 1423342,
            author: 'Sasha',
            time: '14.10.2020',
            text: 'Привет',
         },
         {
            id: 2,
            author: 'Александр',
            time: '15.10.2020',
            text: 'Привет, как дела?',
         },
      ],
      2: [
         {
            id: 1345,
            author: 'Masha',
            time: '14.10.2020',
            text: 'Привет',
         },
         {
            id: 23242,
            author: 'Александр',
            time: '16.10.2020',
            text: 'Привет, здорово что ты пользуешься моей соц. сетью.',
         },
      ],
   },
   activeDialogId: 1,
   newMessage: '',
};

const messanger = (state = initialState, action) => {
   switch (action.type) {
      case SET_ACTIVE_DIALOG:
         return {
            ...state,
            activeDialogId: action.activeDialogId,
         };
      case SEND_MESSAGE:
         const date = new Date();
         const fullDate = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
         const newMessage = {
            id: Date.now(),
            author: 'Александр',
            time: fullDate,
            text: state.newMessage,
         };
         return {
            ...state,
            messages: {
               ...state.messages,
               [state.activeDialogId]: [...state.messages[state.activeDialogId], newMessage],
            },
            newMessage: '',
         };
      case CHANGE_NEW_MESSAGE:
         return {
            ...state,
            newMessage: action.messageValue,
         };
      default:
         return state;
   }
};

export default messanger;
