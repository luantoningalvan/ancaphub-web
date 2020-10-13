import { Types } from '../actions/chats';

const INITIAL_STATE = {
  chats: [],
  currentChat: null,
  messages: [],
  loading: true,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case Types.GET_LAST_CHATS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.NEW_MESSAGE_ARRIEVIED: {
      return {
        ...state,
        messages: [payload, ...state.messages],
      };
    }
    case Types.SWITCH_CHAT: {
      return {
        ...state,
        currentChat: payload.id,
        messages: payload.messages,
      };
    }
    case Types.GET_LAST_CHATS_SUCCESS:
      return {
        ...state,
        chats: payload,
        loading: false,
      };
    default:
      return state;
  }
};
