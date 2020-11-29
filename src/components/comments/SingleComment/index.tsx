import React, { useState } from 'react';
import {
  FiEdit,
  FiMoreVertical as MoreIcon,
  FiTrash as DeleteIcon,
  FiTrash,
} from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedRelativeTime, FormattedMessage } from 'react-intl';
import { differenceInSeconds, parseISO, getTime } from 'date-fns';
import UserAvatar from '../../users/UserAvatar';
import UserName from '../../users/UserName';
import {
  deleteCommentRequest,
  editCommentRequest,
} from '../../../redux/actions/comments';
import { IconButton, Menu } from 'snake-ui';
import { ConfirmationDialog } from '../..';

import { SingleCommentContainer } from './styles';
import { Form } from '@unform/web';
import Naked from '../../form/Naked';

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
  const [editMode, setEditMode] = useState(false);
  const [commentOptions, setCommentOptions] = useState(null);

  const auth = useSelector((state: any) => state.auth.user.id);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteCommentRequest(post, comment.id));
    setDeleteBox(false);
  };

  const handleEdit = (data: { content: string }) => {
    dispatch(
      editCommentRequest({ postId: post, commentId: comment.id, ...data })
    );
    setEditMode(false);
  };

  return (
    <SingleCommentContainer>
      <div className="inner-wrap">
        <UserAvatar user={comment.author} style={{ marginRight: 8 }} />
        <div className="comment-content">
          {!editMode ? (
            <>
              <UserName user={comment.author} fontSize={16} />
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
            </>
          ) : (
            <Form
              onSubmit={handleEdit}
              initialData={{ content: comment.content }}
              onKeyDown={(e) => e.key === 'Escape' && setEditMode(false)}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                }}
              >
                <Naked name="content" placeholder="" />
                <a
                  onClick={() => setEditMode(false)}
                  href="#"
                  style={{ marginTop: 4 }}
                >
                  Cancelar Edição
                </a>
              </div>
            </Form>
          )}
        </div>
        {auth && auth === comment.author.id && (
          <div className="actions">
            <IconButton
              icon={<MoreIcon />}
              onClick={(e: any) => setCommentOptions(e.currentTarget)}
            />

            <Menu
              open={Boolean(commentOptions)}
              placement="left"
              anchorEl={commentOptions}
              onClose={() => setCommentOptions(null)}
              options={[
                {
                  label: <FormattedMessage id="common.delete" />,
                  icon: <FiTrash />,
                  onClick: () => {
                    setCommentOptions(null);
                    setDeleteBox(true);
                  },
                },
                {
                  label: <FormattedMessage id="common.edit" />,
                  icon: <FiEdit />,
                  onClick: () => {
                    setCommentOptions(null);
                    setEditMode(true);
                  },
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
