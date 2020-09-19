export const Types = {
  GET_LAST_CHATS_REQUEST: 'chats/get_last_messages_request',
  GET_LAST_CHATS_SUCCESS: 'chats/get_last_messages_success',
};

export const getLastChatsRequest = (term) => ({
  type: Types.GET_LAST_CHATS_REQUEST,
  payload: term,
});

export const getLastChatsSuccess = (data) => ({
  type: Types.GET_LAST_CHATS_SUCCESS,
  payload: data,
});
