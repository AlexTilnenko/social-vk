import initialisation, { initialState } from '../../reducers/initialisation';
import * as t from '../../actions/types';

describe('Initialisation reducer', () => {
   it('should return the initial state', () => {
      expect(initialisation(undefined, {})).toEqual(initialState);
   });
   it('should handle SET_INITIALIZED', () => {
      const action = { type: t.SET_INITIALIZED };
      expect(initialisation(initialState, action)).toEqual({ ...initialState, initialized: true });
   });
});
