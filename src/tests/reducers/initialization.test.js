import app, { initialState } from '../../reducers/app';
import * as t from '../../actions/types';

describe('Initialisation reducer', () => {
   it('should return the initial state', () => {
      expect(app(undefined, {})).toEqual(initialState);
   });
   it('should handle SET_INITIALIZED', () => {
      const action = { type: t.SET_INITIALIZED };
      expect(app(initialState, action)).toEqual({ ...initialState, initialized: true });
   });
});
