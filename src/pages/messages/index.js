import React from 'react';

import { Container, Chatbox } from '../../components/ui';

const chats = [
  {
    name: 'Zé Pequeté',
    lastMessage: {
      user: 'Zé Pequeté',
      body: 'Tô chegando com os refri, rapaziada',
      createdAt: 'agora',
    },
    messages: [
      {
        user: {
          name: 'Zé Pequeté',
        },
        body: 'Lorem ipsum dolor sit amet.',
        createdAt: '2h',
        sentByUser: false,
      },
      {
        user: {
          name: 'Você',
        },
        body: 'Consectetur adipiscing elit :P',
        createdAt: '1h',
        sentByUser: true,
      },
      {
        user: {
          name: 'Zé Pequeté',
        },
        body: 'Tô chegando com os refri, rapaziada',
        createdAt: 'agora',
        sentByUser: false,
        answeringTo: {
          user: {
            name: 'Zé Pequeté',
          },
          body: 'Lorem ipsum dolor sit amet.',
          createdAt: '2h',
          sentByUser: false,
        },
      },
    ],
  },
];

const Messages = () => (
  <Container>
    <Chatbox
      chats={chats}
      currentChat={chats[0]}
      showList
      showAvatar
      showName
    />
  </Container>
);
export default Messages;
