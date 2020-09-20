import { Types } from '../actions/chats';

const INITIAL_STATE = {
  chats: [
    {
      _id: '01',
      recipients: [
        {
          _id: '5ec1ddc123854d18062ab412',
          name: 'Luan',
        },
        {
          _id: 'a2',
          name: 'Adan Bogado',
          avatar:
            'https://pbs.twimg.com/profile_images/1299784541415116800/GD49AU8z_200x200.jpg',
        },
      ],
      messages: [
        {
          _id: 'b1',
          body: 'kkkkkkkjk',
          user: {
            _id: 'a2',
            name: 'Adan Bogado',
            avatar:
              'https://pbs.twimg.com/profile_images/1299784541415116800/GD49AU8z_200x200.jpg',
          },
        },
      ],
    },
    {
      _id: '02',
      recipients: [
        {
          _id: '5ec1ddc123854d18062ab412',
          name: 'Luan',
        },
        {
          _id: 'a4',
          name: 'Daniel Miorim',
          avatar:
            'https://pbs.twimg.com/profile_images/1250997670661021696/8RZ-0qa2_400x400.jpg',
        },
      ],
      messages: [
        {
          _id: 'b1',
          body: 'kkkkkkkjk',
          user: {
            _id: 'a4',
            name: 'Daniel Miorim',
            avatar:
              'https://pbs.twimg.com/profile_images/1250997670661021696/8RZ-0qa2_400x400.jpg',
          },
        },
      ],
    },
    {
      _id: '03',
      recipients: [
        {
          _id: '5ec1ddc123854d18062ab412',
          name: 'Luan',
        },
        {
          _id: 'a2',
          name: 'Vini Franco',
          avatar:
            'https://pbs.twimg.com/profile_images/1304956891756457984/78U8J6xJ_400x400.jpg',
        },
      ],
      messages: [
        {
          _id: 'b1',
          body: 'kkkkkkkjk',
          user: {
            _id: 'a2',
            name: 'Vini Franco',
            avatar:
              'https://pbs.twimg.com/profile_images/1304956891756457984/78U8J6xJ_400x400.jpg',
          },
        },
      ],
    },
  ],
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
        loading2: true,
      };
    case Types.NEW_MESSAGE_ARRIEVIED: {
      return {
        ...state,
        messages2: [payload, ...state.messages],
      };
    }
    case Types.SWITCH_CHAT: {
      return {
        ...state,
        currentChat: payload._id,
        messages: payload.messages,
      };
    }
    case Types.GET_LAST_CHATS_SUCCESS:
      return {
        ...state,
        chats2: payload,
        loading2: false,
      };
    default:
      return state;
  }
};
