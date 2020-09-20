import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { ChatboxListItemWrapper } from './styles';
import UserAvatar from '../../../users/UserAvatar';

const ChatboxListItem = ({ chat, selected, ...rest }) => {
  const { _id: authUserId } = useSelector((state) => state.auth.user);
  const { currentChat } = useSelector((state) => state.chats);
  const userInfo = chat.recipients.filter((user) => user._id !== authUserId)[0];

  return (
    <ChatboxListItemWrapper
      selected={currentChat !== null && currentChat === chat._id}
      {...rest}
    >
      <div className="block">
        <UserAvatar user={userInfo} />
      </div>
      <div className="block">
        <p className="chatUserName">
          {userInfo.name}
          <span className="messageTime">há 1 minuto</span>
        </p>
        <p className="lastMessage">
          {chat.messages[chat.messages.length - 1].body}
        </p>
      </div>
    </ChatboxListItemWrapper>
  );
};

ChatboxListItem.propTypes = {
  message: PropTypes.shape({
    user: PropTypes.object,
    body: PropTypes.string,
    createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }).isRequired,
};

export default ChatboxListItem;
