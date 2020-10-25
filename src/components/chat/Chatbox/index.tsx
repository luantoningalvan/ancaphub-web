import React from 'react';
import { Paper } from 'snake-ui';
import ChatboxMessageList from '../ChatboxMessageList';
import ChatWindow from '../ChatWindow';
import { ChatboxWrapper } from './styles';

interface ChatboxProps {
  chats: {
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
  }[];
  showName?: boolean;
  showList?: boolean;
  showAvatar?: boolean;
}

const Chatbox: React.FC<ChatboxProps> = ({
  chats,
  showName,
  showList,
  showAvatar,
}) => (
  <ChatboxWrapper>
    <Paper className="paper">
      {showList && <ChatboxMessageList chats={chats} />}
      <ChatWindow showName={showName} showAvatar={showAvatar} />
    </Paper>
  </ChatboxWrapper>
);

export default Chatbox;
