const initialState = {
   dialogs: [
      {id: 1, name: 'Sasha'},
      {id: 2, name: 'Masha'}
   ],
   messages: {
      1: [
         {
            id: 1423342,
            author: 'Sasha',
            time: '14.10.2020',
            data: {
               text: 'Привет'
            }
         },
         {
            id: 2,
            author: 'Александр',
            time: '15.10.2020',
            data: {
               text: 'Привет, как дела?'
            }
         }
      ],
      2: [
         {
            id: 1345,
            author: 'Masha',
            time: '14.10.2020',
            data: {
               text: 'Привет'
            }
         },
         {
            id: 23242,
            author: 'Александр',
            time: '16.10.2020',
            data: {
               text: 'Привет, здорово что ты пользуешься моей соц. сетью.'
            }
         }
      ]
   },
   activeDialogId: 1
}

const messanger = (state = initialState, action) => {
   switch(action.type) {
      case 'SET_ACTIVE_DIALOG':
         return {
            ...state,
            activeDialogId: action.payload
         }
      case 'SEND_MESSAGE':
         const date = new Date();
         const fullDate = date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear();
         const newMessage = {
            id: Date.now(),
            author: 'Александр',
            time: fullDate,
            data: {
               text: action.payload
            }
         }
         return {
            ...state,
            messages: {
               ...state.messages,
               [state.activeDialogId]: [...state.messages[state.activeDialogId], newMessage]
            }
         }
      default:
         return state;
   }
}

export default messanger;