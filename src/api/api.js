import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: { 'API-KEY': '7000b236-bfb6-4f30-b175-37522e846b95' },
});

export const usersApi = {
   getUsers(currentPage, pageSize) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((resp) => resp.data);
   },
   followUser(userId) {
      return instance.post(`follow/${userId}`).then((resp) => resp.data);
   },
   unfollowUser(userId) {
      return instance.delete(`follow/${userId}`).then((resp) => resp.data);
   },
};

export const profileApi = {
   getUserProfile(userId) {
      return instance.get(`profile/${userId || 12045}`).then((resp) => resp.data);
   },
   getUserStatus(userId) {
      return instance.get(`profile/status/${userId || 12045}`).then((resp) => resp.data);
   },
   putUserStatus(statusValue) {
      return axios
         .put(
            `https://social-network.samuraijs.com/api/1.0/profile/status`,
            { status: `${statusValue}` },
            {
               withCredentials: true,
               headers: { 'API-KEY': '7000b236-bfb6-4f30-b175-37522e846b95' },
            }
         )
         .then((resp) => resp);
   },
};

export const authApi = {
   getAuthUserData() {
      return instance.get(`auth/me`).then((resp) => resp.data);
   },
};
