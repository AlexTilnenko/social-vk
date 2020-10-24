import axios from 'axios';

export const setUsers = (data) => ({
   type: 'SET_USERS',
   usersData: data
});

export const fetchUsers = (currentPage, pageSize) => (dispatch) => {
   axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
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


