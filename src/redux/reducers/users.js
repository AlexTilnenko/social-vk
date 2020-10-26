const initialState = {
   items: [],
   pageSize: 24,
   totalUsersCount: 0,
   currentPage: 1,
   loading: true,
}

const users = (state = initialState, action) => {
   switch(action.type) {
      case 'SET_USERS':
         return {
            ...state,
            items: action.usersData.items,
            totalUsersCount: action.usersData.totalCount,
            loading: false
         }
      case 'SET_CURRENT_PAGE':
         return {
            ...state,
            currentPage: action.page,
            loading: false,
         }
      case 'SET_LOADING':
         return {
            ...state,
            loading: true
         }
      case 'FOLLOW_USER':
         return {
            ...state,
            items: state.items.map(user => {
               return user.id === action.id ? {...user, followed: true} : user;
            })
         }
      case 'UNFOLLOW_USER':
         return {
            ...state,
            items: state.items.map(user => {
               return user.id === action.id ? {...user, followed: false} : user;
            })
         }
      default:
         return state;
   }
}

export default users;