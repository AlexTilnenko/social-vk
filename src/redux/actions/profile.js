import axios from 'axios';
const _apibase = 'https://social-network.samuraijs.com/api/1.0'
export const  setProfile = (data) => ({
   type: 'SET_PROFILE',
   profileData: data
})

export const fetchUserProfile = (userId) => (dispatch) => {
   axios.get(`${_apibase}/1.0/profile/${userId || 12045}`)
   .then(resp => {
      dispatch(setProfile(resp.data))
   })
   .catch((e) => {
      console.log(e);
   })
};