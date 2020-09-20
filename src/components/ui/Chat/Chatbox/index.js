import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '../../Paper';
import ChatboxMessageList from '../ChatboxMessageList';
import ChatWindow from '../ChatWindow';
import { ChatboxWrapper } from './styles';

const Chatbox = ({ chats, showName, showList, showAvatar }) => (
  <ChatboxWrapper>
    <Paper className="paper">
      {showList && <ChatboxMessageList chats={chats} />}
      <ChatWindow showName={showName} showAvatar={showAvatar} />
    </Paper>
  </ChatboxWrapper>
);

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

Chatbox.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      messages: PropTypes.arrayOf(MessagePropTypes),
    })
  ).isRequired,
};

export default Chatbox;
