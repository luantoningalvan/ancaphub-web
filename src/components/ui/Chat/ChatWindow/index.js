import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import io from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import { ChatInfoWrapper, EnterMessageInputWrapper } from './styles';
import defaultProfilePicture from '../../../../assets/default-profile-picture.jpg';
import { Scrollable } from '../../Scrollable';
import ChatBubble from '../ChatBubble';
import { newMessageArrieved } from '../../../../actions/chats';

const ENDPOINT = 'localhost:3333';

const ChatInfo = ({ chat, showAvatar }) => (
  <ChatInfoWrapper>
    {showAvatar && (
      <div className="block">
        <img src={defaultProfilePicture} alt="Foto do perfil" />
      </div>
    )}
    <div className="block grow">
      <p>{chat.name}</p>
    </div>
  </ChatInfoWrapper>
);

let socket;

const ChatWindow = ({ showName, showAvatar, showHeader }) => {
  const { currentChat, messages } = useSelector((state) => state.chats);
  const dispatch = useDispatch();

  const [messageInput, setMessageInput] = useState();
  useEffect(() => {
    socket = io(ENDPOINT);

    socket.on('new message', (data) => {
      dispatch(newMessageArrieved(data));
    });
    return () => socket.disconnect();
  }, [dispatch]);

  const handleSendMessage = (e) => {
    e.preventDefault();

    socket.emit('new message', {
      content: 'foda-se',
      chat: currentChat._id,
    });

    setMessageInput('');
  };

  return (
    <>
      {currentChat !== undefined && (
        <Scrollable
          grow
          topContent={
            showHeader ? (
              <ChatInfo chat={currentChat} showAvatar={showAvatar} />
            ) : null
          }
          bottomContent={
            <EnterMessageInputWrapper onSubmit={handleSendMessage}>
              <div className="messageInput">
                <input
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  type="text"
                  placeholder="Digite sua mensagem"
                />
              </div>
            </EnterMessageInputWrapper>
          }
        >
          {messages &&
            messages.map((message) => (
              <ChatBubble
                key={message.body}
                message={message}
                mine={message.sentByUser}
                showName={showName}
                answeringTo={message.answeringTo || false}
              />
            ))}
        </Scrollable>
      )}
    </>
  );
};

const UserModelPropTypes = {
  username: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
  bio: PropTypes.string,
  isVerified: PropTypes.bool,
};

const MessagePropTypes = PropTypes.shape({
  user: UserModelPropTypes,
  body: PropTypes.string,
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
});

ChatWindow.propTypes = {
  chat: PropTypes.shape({
    messages: PropTypes.arrayOf(MessagePropTypes),
  }).isRequired,
};

export default ChatWindow;
