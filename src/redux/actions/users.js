import axios from 'axios';
const _apibase = 'https://social-network.samuraijs.com/api/1.0'
export const setUsers = (data) => ({
   type: 'SET_USERS',
   usersData: data
});

export const fetchUsers = (currentPage, pageSize) => (dispatch) => {
   axios.get(`${_apibase}/users?page=${currentPage}&count=${pageSize}`, 
   {withCredentials: true})
   .then(resp => {
      dispatch(setUsers(resp.data))
   })
   .catch((e) => {
      console.log(e);
   })
};

export const setCurrentPage = (page) => ({
   type: 'SET_CURRENT_PAGE',
   page
});

export const setLoading = () => ({
   type: 'SET_LOADING',
});

export const fetchFollow = (id) => (dispatch) => {
   axios.post(`${_apibase}/follow/${id}`, {}, {
      withCredentials: true, 
      headers: {
      'API-KEY': '7e89cefa-3d85-492d-8bfa-d67701158c9f'
      }
   })
      .then(resp => {
         if (resp.data.resultCode === 0) {
            dispatch(follow(id))
         }
      })
};

export const follow = (id) => ({
   type: 'FOLLOW_USER',
   id
});

export const fetchUnfollow = (id) => (dispatch) => {
   axios.delete(`${_apibase}/follow/${id}`, {
      withCredentials: true, 
      headers: {
      'API-KEY': '7e89cefa-3d85-492d-8bfa-d67701158c9f'
      }
   })
      .then(resp => {
         if (resp.data.resultCode === 0) {
            dispatch(unfollow(id))
         }
      })
};

export const unfollow = (id) => ({
   type: 'UNFOLLOW_USER',
   id
});

