import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as a from '../../actions/users';
import * as t from '../../actions/types';
import fetchMock from 'fetch-mock';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore();

describe('Users actions', () => {
   describe('Sync actions', () => {
      const usersData = [
         {
            id: 1,
            name: 'Alex',
            followed: false,
         },
         {
            id: 2,
            name: 'Oleg',
            followed: true,
         },
         {
            id: 3,
            name: 'Vladislav',
            followed: false,
         },
      ];
      it('setUsers', () => {
         const expectedAction = {
            payload: usersData,
            type: t.SET_USERS,
         };
         expect(a.setUsers(usersData)).toEqual(expectedAction);
      });

      it('setCurrentPage', () => {
         const expectedAction = {
            payload: 10,
            type: t.SET_CURRENT_PAGE,
         };
         expect(a.setCurrentPage(10)).toEqual(expectedAction);
      });

      it('setLoadingProgress', () => {
         const expectedAction = {
            type: t.SET_LOADING,
         };
         expect(a.setLoadingProgress()).toEqual(expectedAction);
      });

      it('setFollowingProgress', () => {
         const expectedAction = {
            type: t.SET_FOLLOWING,
            payload: { isFetching: true, id: 12045 },
         };
         expect(a.setFollowingProgress({ isFetching: true, id: 12045 })).toEqual(expectedAction);
      });

      it('toggleFollow', () => {
         const expectedAction = {
            type: t.TOGGLE_FOLLOW_USER,
            payload: 12045,
         };
         expect(a.toggleFollow(12045)).toEqual(expectedAction);
      });
   });

   describe('Async actions', () => {
      beforeEach(() => {
         store.clearActions();
      });
      afterEach(() => {
         fetchMock.restore();
      });

      it('some', () => {});
   });
});
