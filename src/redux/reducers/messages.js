const initialState = {
   dialogs: [
      {id: 1, name: 'Sasha'},
      {id: 2, name: 'Masha'},
      {id: 3, name: 'Dasha'},
      {id: 4, name: 'Pasha'}
   ],
   messages: {

   }
}

const messages = (state = initialState, action) => {
   switch(action.type) {

      default:
         return state;
   }
}

export default messages;