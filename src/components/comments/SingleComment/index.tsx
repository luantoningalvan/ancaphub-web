import React, { useState } from 'react';
import {
  FiMoreVertical as MoreIcon,
  FiTrash as DeleteIcon,
} from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedRelativeTime, FormattedMessage } from 'react-intl';
import { differenceInSeconds, parseISO, getTime } from 'date-fns';
import UserAvatar from '../../users/UserAvatar';
import UserName from '../../users/UserName';
import { deleteCommentRequest } from '../../../actions/comments';
import { IconButton, Menu } from 'snake-ui';
import { ConfirmationDialog } from '../..';

import { SingleCommentContainer } from './styles';

interface SingleCommentProps {
  comment: {
    id: string;
    author: {
      id: string;
      avatar: string;
      username: string;
    };
    content: string;
    date: string;
  };
  post: any;
}

const SingleComment: React.FC<SingleCommentProps> = ({ comment, post }) => {
  const [deleteBox, setDeleteBox] = useState(false);
  const [commentOptions, setCommentOptions] = useState(null);

  const auth = useSelector((state: any) => state.auth.user.id);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCommentRequest(post, comment.id));
    setDeleteBox(false);
  };

  return (
    <SingleCommentContainer>
      <div className="inner-wrap">
        <UserAvatar user={comment.author} style={{ marginRight: 8 }} />
        <div className="comment-content">
          <UserName user={comment.author} fontSize={1} />
          <p className="comment-text">{comment.content}</p>
          <ul className="date">
            <li>
              <span className="time-link">
                <FormattedRelativeTime
                  numeric="auto"
                  value={
                    -differenceInSeconds(
                      Date.now(),
                      getTime(parseISO(comment.date))
                    )
                  }
                  updateIntervalInSeconds={30}
                />
              </span>
            </li>
          </ul>
        </div>
        {auth && auth === comment.author.id && (
          <div className="actions">
            <IconButton
              icon={<MoreIcon />} // @ts-ignore
              onClick={(e: any) => setCommentOptions(e.currentTarget)}
            />

            <Menu
              open={Boolean(commentOptions)}
              placement="left"
              anchorEl={commentOptions}
              onClose={() => setCommentOptions(null)}
              options={[
                {
                  // @ts-ignore
                  label: <FormattedMessage id="common.delete" />,
                  onClick: () => setDeleteBox(true),
                },
              ]}
            />
            <ConfirmationDialog
              show={deleteBox}
              onClose={() => setDeleteBox(false)}
              onConfirm={handleDelete}
              title={<FormattedMessage id="components.commentBox.delete" />}
              message={
                <FormattedMessage id="components.commentBox.confirmDelete" />
              }
            />
          </div>
        )}
      </div>
    </SingleCommentContainer>
  );
};

export default SingleComment;
