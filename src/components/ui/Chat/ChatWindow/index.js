import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ChatInfoWrapper, EnterMessageInputWrapper } from './styles';
import defaultProfilePicture from '../../../../assets/default-profile-picture.jpg';
import { Scrollable } from '../../Scrollable';
import ChatBubble from '../ChatBubble';
// import socketIOClient from "socket.io-client";
// const ENDPOINT = "http://127.0.0.1:4001";

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

const EnterMessageInput = () => (
  <EnterMessageInputWrapper>
    <div className="messageInput">
      <input type="text" placeholder="Digite sua mensagem" />
    </div>
  </EnterMessageInputWrapper>
);

const ChatWindow = ({ chat, showName, showAvatar, showHeader }) => {
  useEffect(() => {});

  return (
    <>
      {chat !== undefined && (
        <Scrollable
          grow
          topContent={
            showHeader ? <ChatInfo chat={chat} showAvatar={showAvatar} /> : null
          }
          bottomContent={<EnterMessageInput />}
        >
          {chat.messages &&
            chat.messages.map((message) => (
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
