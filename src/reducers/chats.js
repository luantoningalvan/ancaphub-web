import { Types } from '../actions/chats';

const INITIAL_STATE = {
  chats: [],
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_LAST_MESSAGES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_LAST_MESSAGES_SUCCESS:
      return {
        ...state,
        chats: payload,
        loading: false,
      };
    default:
      return state;
  }
};
