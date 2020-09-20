import React from 'react';
import PropTypes from 'prop-types';
import { generate } from 'shortid';
import SearchIcon from 'react-ionicons/lib/IosSearch';
import { useDispatch } from 'react-redux';
import { MessageSearchWrap } from './styles';
import ChatboxListItem from '../ChatboxListItem';
import { Scrollable } from '../../Scrollable';
import { switchChat } from '../../../../actions/chats';
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

const ChatboxMessageList = ({ chats }) => {
  const dispatch = useDispatch();

  const handleSwitchChat = (chat) => {
    dispatch(switchChat(chat));
  };

  return (
    <>
      <Scrollable topContent={<MessageSearch />}>
        {chats.length > 0 ? (
          chats.map((chat) => (
            <ChatboxListItem
              key={() => generate()}
              chat={chat}
              onClick={() => handleSwitchChat(chat)}
            />
          ))
        ) : (
          <p>Nenhuma mensagem enviada ainda</p>
        )}
      </Scrollable>
    </>
  );
};
ChatboxMessageList.propTypes = {
  chats: PropTypes.arrayOf(
    PropTypes.shape({
      messages: PropTypes.arrayOf(MessagePropTypes),
    })
  ).isRequired,
};

export default ChatboxMessageList;
