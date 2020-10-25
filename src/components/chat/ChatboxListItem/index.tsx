import React from 'react';
import { useSelector } from 'react-redux';
import { ChatboxListItemWrapper } from './styles';
import UserAvatar from '../../users/UserAvatar';

interface ChatboxListItemProps {
  chat: any;
  onClick?(): void;
}

const ChatboxListItem: React.FC<ChatboxListItemProps> = ({ chat, ...rest }) => {
  const { id: authUserId } = useSelector((state: any) => state.auth.user);
  const { currentChat } = useSelector((state: any) => state.chats);
  const userInfo = chat.recipients.filter(
    (user: any) => user.id !== authUserId
  )[0];

  return (
    <ChatboxListItemWrapper
      selected={currentChat !== null && currentChat === chat.id}
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

export default ChatboxListItem;
