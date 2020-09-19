import React from 'react';
import PropTypes from 'prop-types';
import defaultProfilePicture from '../../../../assets/default-profile-picture.jpg';
import { ChatboxListItemWrapper } from './styles';

const ChatboxListItem = ({ message }) => (
  <ChatboxListItemWrapper>
    <div className="block">
      <img src={defaultProfilePicture} alt="Foto do perfil" />
    </div>
    <div className="block">
      <p className="chatUserName">
        {message.user.name}{' '}
        <span className="messageTime">{message.createdAt}</span>
      </p>
      <p className="lastMessage">{message.body}</p>
    </div>
  </ChatboxListItemWrapper>
);

ChatboxListItem.propTypes = {
  message: PropTypes.shape({
    user: PropTypes.object,
    body: PropTypes.string,
    createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};

export default ChatboxListItem;
