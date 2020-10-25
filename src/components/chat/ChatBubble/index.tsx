import React from 'react';
import { FiShare as ReplyIconNormal } from 'react-icons/fi';
import { BubbleBody, BubbleWrap } from './styles';
import UserAvatar from '../../users/UserAvatar';

const ReplyIcon = () => (
  <ReplyIconNormal
    color="white"
    style={{ transform: 'scale(-1, 1)', marginRight: 8 }}
  />
);

interface ChatBubbleProps {
  message: any;
  mine?: boolean;
  showName?: boolean;
  answeringTo?: any;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  message,
  mine,
  showName,
  answeringTo,
}) => (
  <BubbleWrap mine={mine}>
    <UserAvatar user={message.user} />
    <BubbleBody mine={mine}>
      {showName && (
        <span className="messageSenderName">{message.user.name}</span>
      )}
      {answeringTo && (
        <div className="answeringTo">
          <ReplyIcon />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {showName && (
              <span className="messageSenderName">{answeringTo.user.name}</span>
            )}
            <span className="messageBody">{answeringTo.body}</span>
          </div>
        </div>
      )}
      <div className="messageContent">
        <span className="messageBody">{message.body}</span>
        <span className="messageTime">{message.createdAt}</span>
      </div>
    </BubbleBody>
  </BubbleWrap>
);

export default ChatBubble;
