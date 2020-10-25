import React from 'react';
import { generate } from 'shortid';
import { FiSearch as SearchIcon } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { MessageSearchWrap } from './styles';
import ChatboxListItem from '../ChatboxListItem';
import { Scrollable } from 'snake-ui';
import { switchChat } from '../../../actions/chats';

type Chat = {
  user: {
    username: string;
    email: string;
    name: string;
    avatar: string;
    bio: string;
    isVerified: boolean;
  };
  body: string;
  createdAt: string;
};

interface ChatboxMessageListProps {
  chats: Chat[];
}

const ChatboxMessageList: React.FC<ChatboxMessageListProps> = ({ chats }) => {
  const dispatch = useDispatch();

  const handleSwitchChat = (chat: Chat) => {
    dispatch(switchChat(chat));
  };

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

  return (
    <>
      <Scrollable topContent={<MessageSearch />}>
        {chats.length > 0 ? (
          chats.map((chat) => (
            <ChatboxListItem
              key={generate()}
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

export default ChatboxMessageList;
