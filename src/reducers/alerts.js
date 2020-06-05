import { Types } from '../actions/alerts';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.ADD_ALERT:
      return [...state, payload];
    case Types.REMOVE_ALERT: {
      const newState = state.filter((alert) => alert.id !== payload);

      return newState;
    }
    default:
      return state;
  }
};
