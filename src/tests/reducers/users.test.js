import users, { initialState } from '../../reducers/users';
import * as t from '../../actions/types';

const usersData = {
   items: [
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
   ],
   totalCount: 1000,
};

describe('Users reducer', () => {
   it('should return initial state', () => {
      expect(users(undefined, {})).toEqual(initialState);
   });

   it('should handle SET_USERS', () => {
      const state = {
         ...initialState,
         isLoading: true,
      };
      const action = {
         type: t.SET_USERS,
         payload: usersData,
      };
      const expectedState = {
         ...initialState,
         items: usersData.items,
         totalUsersCount: usersData.totalCount,
         isLoading: false,
      };
      expect(users(state, action)).toEqual(expectedState);
   });

   it('should handle SET_LOADING', () => {
      const action = {
         type: t.SET_LOADING,
      };
      const expectedState = {
         ...initialState,
         isLoading: true,
      };
      expect(users(initialState, action)).toEqual(expectedState);
   });

   it('should handle SET_CURRENT_PAGE', () => {
      const state = {
         ...initialState,
         items: usersData.items,
         totalUsersCount: usersData.totalCount,
         isLoading: true,
      };
      const action = {
         type: t.SET_CURRENT_PAGE,
         payload: 3,
      };
      const expectedState = {
         ...state,
         currentPage: 3,
         isLoading: false,
      };
      expect(users(state, action)).toEqual(expectedState);
   });
   describe('should handle SET_FOLLOWING', () => {
      it('should add item to array', () => {
         const state = {
            ...initialState,
            items: usersData.items,
            totalUsersCount: usersData.totalCount,
            currentPage: 3,
         };
         const action = {
            type: t.SET_FOLLOWING,
            payload: { isFetching: true, id: 1340 },
         };
         const expectedState = {
            ...state,
            followingInProgress: [1340],
         };
         expect(users(state, action)).toEqual(expectedState);
      });

      it('should return new and old items', () => {
         const state = {
            ...initialState,
            items: usersData.items,
            totalUsersCount: usersData.totalCount,
            currentPage: 3,
            followingInProgress: [1340],
         };
         const action = {
            type: t.SET_FOLLOWING,
            payload: { isFetching: true, id: 1344 },
         };
         const expectedState = {
            ...state,
            followingInProgress: [1340, 1344],
         };
         expect(users(state, action)).toEqual(expectedState);
      });
   });
   describe('Should handle TOGGLE_FOLLOW_USER', () => {
      it('should follow correct user', () => {
         const state = {
            ...initialState,
            items: usersData.items,
            totalUsersCount: usersData.totalCount,
            currentPage: 3,
            followingInProgress: [1],
         };
         const action = {
            type: t.TOGGLE_FOLLOW_USER,
            payload: 1,
         };
         const expectedState = {
            ...state,
            items: [
               {
                  id: 1,
                  name: 'Alex',
                  followed: true,
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
            ],
            followingInProgress: [],
         };
         expect(users(state, action)).toEqual(expectedState);
      });

      it('should unfollow correct user', () => {
         const state = {
            ...initialState,
            items: usersData.items,
            totalUsersCount: usersData.totalCount,
            currentPage: 3,
            followingInProgress: [2],
         };
         const action = {
            type: t.TOGGLE_FOLLOW_USER,
            payload: 2,
         };
         const expectedState = {
            ...state,
            items: [
               {
                  id: 1,
                  name: 'Alex',
                  followed: false,
               },
               {
                  id: 2,
                  name: 'Oleg',
                  followed: false,
               },
               {
                  id: 3,
                  name: 'Vladislav',
                  followed: false,
               },
            ],
            followingInProgress: [],
         };
         expect(users(state, action)).toEqual(expectedState);
      });
   });
});
