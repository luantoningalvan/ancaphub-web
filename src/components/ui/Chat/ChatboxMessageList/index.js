import React from 'react';
import PropTypes from 'prop-types';
import { generate } from 'shortid';
import SearchIcon from 'react-ionicons/lib/IosSearch';
import { MessageSearchWrap } from './styles';
// Components
import ChatboxListItem from '../ChatboxListItem';
import { Scrollable } from '../../Scrollable';

// Icons

// Validation
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

const MessageSearch = () => (
  <MessageSearchWrap>
    <div className="searchInput">
      <i>
        <SearchIcon />
      </i>
      <input type="text" placeholder="Procurar mensagens" />
    </div>
  </MessageSearchWrap>
);

const ChatboxMessageList = ({ chats }) => (
  <>
    <Scrollable topContent={<MessageSearch />}>
      {chats.lenght > 0 ? (
        chats.map((chat) => (
          <ChatboxListItem key={generate()} message={chat.messages[0]} />
        ))
      ) : (
        <p>Nenhuma mensagem enviada ainda</p>
      )}
    </Scrollable>
  </>
);

ChatboxMessageList.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      messages: PropTypes.arrayOf(MessagePropTypes),
    })
  ).isRequired,
};

export default ChatboxMessageList;
