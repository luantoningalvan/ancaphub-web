import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Chatbox } from '../../components/ui';
import { getLastChatsRequest } from '../../actions/chats';

const Messages = () => {
  const { chats } = useSelector((state) => state.chats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLastChatsRequest());
  }, [dispatch]);

  return (
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
};

export default Messages;
