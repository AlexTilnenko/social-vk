import axios from 'axios';

export const userInstance = axios.create({
   baseURL: 'https://social-network.samuraijs.com/api/1.0/',
   withCredentials: true,
   headers: { 'API-KEY': '7000b236-bfb6-4f30-b175-37522e846b95' },
});

export const usersApi = {
   getUsers(currentPage, pageSize, userName = '', isFriends = null) {
      return userInstance
         .get(`users?page=${currentPage}&count=${pageSize}${userName ? `&term=${userName}` : ''}&friend=${isFriends}`)
         .then((resp) => resp.data);
   },
   followUser(userId) {
      return userInstance.post(`follow/${userId}`).then((resp) => resp.data);
   },
   unfollowUser(userId) {
      return userInstance.delete(`follow/${userId}`).then((resp) => resp.data);
   },
};

export const profileApi = {
   getUserProfile(userId) {
      return userInstance.get(`profile/${userId}`).then((resp) => {
         return resp.data;
      });
   },
   getUserStatus(userId) {
      return userInstance.get(`profile/status/${userId}`).then((resp) => resp.data);
   },
   putUserStatus(statusValue) {
      return userInstance
         .put(`profile/status`, {
            status: `${statusValue}`,
         })
         .then((resp) => resp);
   },
   putUserPhoto(photo) {
      const formData = new FormData();
      formData.append('image', photo);
      return userInstance
         .put(`profile/photo`, formData, {
            headers: {
               'Content-Type': 'multipart/form-data',
            },
         })
         .then((resp) => resp.data);
   },
   putUserProfile(id, data) {
      return userInstance.put('profile', { userId: id, ...data }).then((resp) => resp);
   },
};

export const authApi = {
   getAuthUserData() {
      return userInstance.get(`auth/me`).then((resp) => resp.data);
   },
   login({ login, password, rememberMe = false, captcha = false }) {
      return userInstance.post('auth/login', { email: login, password, rememberMe, captcha }).then((resp) => resp.data);
   },
   logout() {
      return userInstance.delete('auth/login').then((resp) => resp.data);
   },
};

export const securityApi = {
   getCaptchaUrl() {
      return userInstance.get('security/get-captcha-url').then((resp) => resp.data.url);
   },
};
