export const Types = {
  GET_LAST_CHATS_REQUEST: 'chats/get_last_chats_request',
  GET_LAST_CHATS_SUCCESS: 'chats/get_last_chats_success',
  NEW_MESSAGE_ARRIEVIED: 'chats/new_message_arrievied',
  SWITCH_CHAT: 'chats/switch_chat',
};

export const getLastChatsRequest = (term) => ({
  type: Types.GET_LAST_CHATS_REQUEST,
  payload: term,
});

export const getLastChatsSuccess = (data) => ({
  type: Types.GET_LAST_CHATS_SUCCESS,
  payload: data,
});

export const newMessageArrieved = (message) => ({
  type: Types.NEW_MESSAGE_ARRIEVIED,
  payload: message,
});

export const switchChat = (message) => ({
  type: Types.SWITCH_CHAT,
  payload: message,
});
