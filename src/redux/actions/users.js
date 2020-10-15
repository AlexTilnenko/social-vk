import axios from 'axios';

export const setUsers = (data) => ({
   type: 'SET_USERS',
   payload: data
})

export const fetchUsers = () => (dispatch) => {
   axios.get('https://social-network.samuraijs.com/api/1.0/users')
   .then(resp => {
      dispatch(setUsers(resp.data.items))
   })
}

