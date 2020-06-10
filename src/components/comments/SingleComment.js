import React, { useState } from 'react';
import styled from 'styled-components';
import {
  FiMoreVertical as MoreIcon,
  FiTrash as DeleteIcon,
} from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { FormattedRelativeTime, FormattedMessage } from 'react-intl';
import { differenceInSeconds, parseISO, getTime } from 'date-fns';
import reactStringReplace from 'react-string-replace';
import UserAvatar from '../users/UserAvatar';
import UserName from '../users/UserName';
import { deleteCommentRequest } from '../../actions/comments';

import {
  Dropdown,
  DropdownListContainer,
  DropdownListItem,
  IconButton,
  ConfirmationDialog,
} from '../ui';

const SingleCommentStyle = styled.div`
  .inner-wrap {
    display: flex;
    align-items: stretch;
    margin-bottom: 10px;
  }

  .comment-content {
    background: rgba(0, 0, 0, 0.05);
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: flex-start;
  }

  .comment-text {
    padding-top: 3px;
    margin: 0;
    text-align: justify;
    font-size: 0.92em;
    word-wrap: normal;
    word-break: keep-all;
    & > a {
      color: ${(props) => props.theme.palette.secondary};
    }
  }

  .date {
    font-size: 0.7em;
    margin-top: 8px;

    li {
      list-style: none;
      display: inline-block;
      &:after {
        content: '·';
        margin: 0px 5px;
      }

      &:last-child {
        &:after {
          content: '';
          margin: 0;
        }
      }
    }

    span.time-link {
      color: ${(props) => props.theme.palette.text.secondary};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .actions {
    display: flex;
    flex-direction: column;
    justify-content: center;

    svg {
      fill: ${(props) => props.theme.palette.text.secondary};
      height: 20px;
      width: 20px;
    }
  }
`;

const SingleComment = ({ comment, post }) => {
  const [deleteBox, setDeleteBox] = useState(false);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.user._id);

  const matchHandles = (content) => {
    const handleExp = new RegExp(/@(\w+)/g);
    const matches = content.match(handleExp);
    if (matches) {
      let newContent = content;
      matches.forEach(() => {
        newContent = reactStringReplace(newContent, handleExp, (match, i) => {
          return (
            <a href={`https://alpha.ancaphub.com/${match}`} key={match + i}>
              @{match}
            </a>
          );
        });
      });
      return newContent;
    }
    return [content];
  };

  const handleDelete = () => {
    dispatch(deleteCommentRequest(post, comment._id));
    setDeleteBox(false);
  };

  return (
    <SingleCommentStyle>
      <div className="inner-wrap">
        <UserAvatar user={comment.user} style={{ marginRight: 8 }} />
        <div className="comment-content">
          <UserName user={comment.user} fontSize={1} />
          <p className="comment-text">
            {matchHandles(comment.content).map((match) => (
              <>{match}</>
            ))}
          </p>
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
        {auth && auth === comment.user._id && (
          <div className="actions">
            <Dropdown
              placement="left-start"
              toggle={<IconButton icon={<MoreIcon />} />}
            >
              <DropdownListContainer>
                <DropdownListItem
                  icon={<DeleteIcon />}
                  onClick={() => setDeleteBox(true)}
                >
                  <FormattedMessage id="common.delete" />
                </DropdownListItem>
              </DropdownListContainer>
            </Dropdown>
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
    </SingleCommentStyle>
  );
};

export default SingleComment;
