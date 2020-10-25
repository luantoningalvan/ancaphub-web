import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'snake-ui';
import { Chatbox } from '../../components';
import { getLastChatsRequest } from '../../actions/chats';

const Messages = () => {
  const { chats } = useSelector((state: any) => state.chats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLastChatsRequest());
  }, [dispatch]);

  return (
    <Container>
      <Chatbox chats={chats} showList showAvatar showName />
    </Container>
  );
};

export default Messages;
