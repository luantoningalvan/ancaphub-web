import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Chatbox } from '../../components/ui';
import { getLastChatsRequest } from '../../actions/chats';

const Messages = () => {
  const { chats } = useSelector((state) => state.chats);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getLastChatsRequest());
  }, [dispatch]);

  return (
    <Container>
      <Chatbox chats={chats} currentChat={id} showList showAvatar showName />
    </Container>
  );
};

export default Messages;
