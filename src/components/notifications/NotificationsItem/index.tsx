import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NotificationWrap } from './styles';

import {
  FiThumbsUp as LikeIcon,
  FiMessageSquare as CommentIcon,
  FiCheck as CheckIcon,
  FiStar as RateIcon,
  FiShare as ShareIcon,
  FiUserPlus as FollowIcon,
} from 'react-icons/fi';

import UserAvatar from '../../users/UserAvatar';

const icons = {
  comment_liked: () => LikeIcon,
  comment_replied: () => CommentIcon,
  item_approved: () => CheckIcon,
  item_rated: () => RateIcon,
  post_commented: () => CommentIcon,
  post_liked: () => LikeIcon,
  post_shared: () => ShareIcon,
  user_followed: () => FollowIcon,
};

interface NotificationItemProps {
  notification: {
    type:
      | 'comment_liked'
      | 'comment_replied'
      | 'item_approved'
      | 'item_rated'
      | 'post_commented'
      | 'post_liked'
      | 'post_shared'
      | 'user_followed';
    sender: any;
    data: {
      id: string;
      name: string;
      avatar: string;
    };
    date: string;
  };
}

const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
}) => {
  const Icon = icons[notification.type]();
  return (
    <NotificationWrap>
      <div className="thumb">
        <UserAvatar user={notification.sender} size={56} />
        <div className="icon">
          <Icon />
        </div>
      </div>
      <div>
        <span className="message">
          <FormattedMessage
            id={`components.notifications.${notification.type}`}
            values={{
              ...notification.sender,
              strong: (...chunks: any) => <strong>{chunks}</strong>,
            }}
          />
        </span>
        <span className="date">{notification.date}</span>
      </div>
    </NotificationWrap>
  );
};

export default NotificationItem;
