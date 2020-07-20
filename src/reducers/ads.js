import { Types } from '../actions/ads';

const INITIAL_STATE = {
  loading: true,
  ad: {},
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_RANDOM_AD_REQUEST:
      return { ...state, loading: true };
    case Types.GET_RANDOM_AD_SUCCESS:
      return {
        ...state,
        ad: payload,
        loading: false,
      };
    default:
      return state;
  }
};
