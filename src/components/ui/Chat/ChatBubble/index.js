import React from 'react';
import PropTypes from 'prop-types';
import ReplyIconNormal from 'react-ionicons/lib/MdShareAlt';
import { BubbleBody, BubbleWrap } from './styles';

const MessagePropTypes = PropTypes.shape({
  body: PropTypes.string,
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
});

const ReplyIcon = () => (
  <ReplyIconNormal
    color="white"
    style={{ transform: 'scale(-1, 1)', marginRight: 8 }}
  />
);

// Message properties will be changed to match actual API response. This is only for prototyping
const ChatBubble = ({ message, mine, showName, answeringTo }) => (
  <BubbleWrap mine={mine}>
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

ChatBubble.propTypes = {
  message: MessagePropTypes.isRequired,
  mine: PropTypes.bool,
};

ChatBubble.defaultProps = {
  mine: false,
};

export default ChatBubble;
