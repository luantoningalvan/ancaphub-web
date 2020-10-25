import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';
import { GrEmoji } from 'react-icons/gr';
import { IconButton, Dropdown } from 'snake-ui';
import EmojiPicker from 'emoji-picker-react';
import { ChatInfoWrapper, EnterMessageInputWrapper } from './styles';
import defaultProfilePicture from '../../../assets/default-profile-picture.jpg';
import { Scrollable } from 'snake-ui';
import ChatBubble from '../ChatBubble';
import { newMessageArrieved } from '../../../actions/chats';

const ENDPOINT = 'localhost:3333';

let socket: any;

type User = {
  username: string;
  name: string;
  avatar?: string;
  bio?: string;
  isVerified?: boolean;
};

type Message = {
  user: User;
  body: string;
  createdAt?: string;
  sentByUser: any;
  answeringTo?: any;
};

interface ChatWindowProps {
  showName?: boolean;
  showAvatar?: boolean;
  showHeader?: boolean;
}

const ChatInfo = ({
  chat,
  showAvatar,
}: {
  chat: any;
  showAvatar?: boolean;
}) => (
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

const ChatWindow: React.FC<ChatWindowProps> = ({
  showName,
  showAvatar,
  showHeader,
}) => {
  const { currentChat, messages } = useSelector((state: any) => state.chats);
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [messageInput, setMessageInput] = useState<string>('');

  useEffect(() => {
    alert('Trocou');
  }, [currentChat]);
  useEffect(() => {
    socket = io(ENDPOINT);

    socket.on('new message', (data: any) => {
      dispatch(newMessageArrieved(data));
    });
    return () => socket.disconnect();
  }, [dispatch]);

  const handleSendMessage = (e: any) => {
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
                <IconButton
                  icon={<GrEmoji />}
                  style={{ width: 40, marginRight: -8 }}
                  onClick={handleClick}
                />
                <Dropdown
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  placement="top-end"
                >
                  <EmojiPicker onEmojiClick={() => {}} />
                </Dropdown>
              </div>
            </EnterMessageInputWrapper>
          }
        >
          {messages &&
            messages.map((message: Message) => (
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

export default ChatWindow;
