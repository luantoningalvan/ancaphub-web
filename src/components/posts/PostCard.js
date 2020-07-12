import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  FormattedRelativeTime,
  FormattedMessage,
  FormattedPlural,
} from 'react-intl';
import { parseISO, getTime, differenceInSeconds } from 'date-fns';
import { Editor, EditorState, convertFromRaw } from 'draft-js';

// Draftjs plugins
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import 'draft-js-hashtag-plugin/lib/plugin.css';

import ReactPlayer from 'react-player';

import {
  FiMoreVertical as MdMore,
  FiThumbsUp as LikeIcon,
  FiMessageSquare as CommentIcon,
  FiTrash as DeleteIcon,
} from 'react-icons/fi';

import { useDispatch, useSelector } from 'react-redux';
import basicTextStylePlugin from '../editor/plugins/basicTextStylePlugin';
import linkPluginOptions from '../editor/plugins/addLinkPlugin';
import { getAllDecorators } from '../editor/utils/decorators';
import CommentBox from '../comments/CommentBox';

import {
  IconButton,
  DropdownListItem,
  Dropdown,
  ImageBox,
  ConfirmationDialog,
  DropdownListContainer,
} from '../ui';

import defaultProfilePicture from '../../assets/default-profile-picture.jpg';
import LikeBox from './LikeBox';
import PostPoll from './PostPoll';
import { PostContainer } from './styles.css';
import { likePostRequest, deletePostRequest } from '../../actions/posts';

const PostContent = styled.p`
  word-wrap: normal;
  word-break: keep-all;
  text-align: justify;
`;

const PostContentWrapper = styled.div`
  .DraftEditor-root {
    max-width: 640px;

    & > * {
      .draftJsLinkifyPlugin__link__2ittM,
      .draftJsLinkifyPlugin__link__2ittM:visited {
        color: ${(props) => props.theme.palette.secondary};
        text-decoration: none;
      }

      .draftJsLinkifyPlugin__link__2ittM:hover,
      .draftJsLinkifyPlugin__link__2ittM:focus {
        color: ${(props) => props.theme.palette.secondary};
        outline: 0; /* reset for :focus */
        cursor: pointer;
      }

      .draftJsLinkifyPlugin__link__2ittM:active {
        color: ${(props) => props.theme.palette.secondary};
      }
    }
  }
`;

const PostCard = ({ data }) => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.user._id);
  const [commentBoxState, setCommenteBoxState] = useState(false);
  const [likeBoxState, setLikeBoxState] = useState(false);
  const [deleteDialogState, setDeleteDialogState] = useState(false);

  const handleCommentBox = () => setCommenteBoxState(!commentBoxState);
  const handleDelete = () => setDeleteDialogState(!deleteDialogState);

  const linkifyPlugin = createLinkifyPlugin(linkPluginOptions);
  const hashtagPlugin = createHashtagPlugin();

  const plugins = [linkifyPlugin, basicTextStylePlugin, hashtagPlugin];

  const showPostContent = () => {
    try {
      // Conteúdo do post que veio do banco de dados
      const contentState = convertFromRaw(JSON.parse(data.content));

      // Os decorators que precisam ser adicionados ao editor
      const decorators = getAllDecorators(plugins);

      // O que realmente é passado para o editor
      const editorState = EditorState.createWithContent(
        contentState,
        decorators
      );

      return (
        <PostContentWrapper>
          <Editor editorState={editorState} readOnly plugins={plugins} />
        </PostContentWrapper>
      );
    } catch (error) {
      return <PostContent>{data.content}</PostContent>;
    }
  };

  const handleLikePost = (id) => {
    dispatch(likePostRequest(id));
  };

  const handleDeletePost = (id) => {
    dispatch(deletePostRequest(id));
  };

  return (
    <PostContainer>
      <div className="post-header">
        <div className="profile-picture">
          <img
            alt="user avatar"
            src={data.user.avatar ? data.user.avatar : defaultProfilePicture}
          />
        </div>
        <div>
          <Link to={`/${data.user.username}`}>{data.user.name}</Link>
          <span>
            <FormattedRelativeTime
              numeric="auto"
              value={
                -differenceInSeconds(
                  Date.now(),
                  getTime(parseISO(data.createdAt))
                )
              }
              updateIntervalInSeconds={30}
            />
          </span>
        </div>
        {auth && auth === data.user._id && (
          <div style={{ marginLeft: 'auto' }}>
            <Dropdown
              offsetX={15}
              placement="left-start"
              toggle={<IconButton icon={<MdMore fontSize="24px" />} />}
            >
              <DropdownListContainer>
                <DropdownListItem icon={<DeleteIcon />} onClick={handleDelete}>
                  <FormattedMessage id="common.delete" />
                </DropdownListItem>
              </DropdownListContainer>
            </Dropdown>
            <ConfirmationDialog
              show={deleteDialogState}
              onClose={handleDelete}
              onConfirm={() => handleDeletePost(data._id)}
              title={<FormattedMessage id="common.delete" />}
              message={
                <FormattedMessage id="components.postCard.confirmDelete" />
              }
            />
          </div>
        )}
      </div>

      <div style={{ padding: 16 }}>
        {/* Show post content  */}
        {showPostContent()}
        {/* If post has embed media type */}
        {(data.media && data.media.mediaType) === 'embed' && (
          <ReactPlayer
            url={data.media.data}
            light
            style={{ marginTop: 16 }}
            width="100%"
          />
        )}

        {data.media && data.media.mediaType === 'image' && (
          <ImageBox src={data.media.data} />
        )}

        {data.media && data.media.mediaType === 'poll' && (
          <PostPoll post={data} />
        )}

        {(data.likeCount > 0 || data.commentCount > 0) && (
          <div className="post-counts">
            <span onClick={() => setLikeBoxState(true)} role="presentation">
              {`${data.likeCount} `}
              <FormattedPlural
                value={`${data.likeCount} `}
                one={
                  <FormattedMessage id="common.likeNoun">
                    {(txt) => <>{txt.toLowerCase()}</>}
                  </FormattedMessage>
                }
                other={
                  <FormattedMessage id="common.likePlural">
                    {(txt) => <>{txt.toLowerCase()}</>}
                  </FormattedMessage>
                }
              />
            </span>
            <span role="presentation" onClick={handleCommentBox}>
              {` ${data.commentCount} `}
              <FormattedPlural
                value={`${data.commentCount}`}
                one={
                  <FormattedMessage id="common.comment">
                    {(txt) => <>{txt.toLowerCase()}</>}
                  </FormattedMessage>
                }
                other={
                  <FormattedMessage id="common.comments">
                    {(txt) => <>{txt.toLowerCase()}</>}
                  </FormattedMessage>
                }
              />
            </span>
            <LikeBox
              open={likeBoxState}
              onClose={() => setLikeBoxState(false)}
              postId={data._id}
            />
          </div>
        )}
      </div>

      <div className="post-actions">
        <div>
          <button
            type="button"
            onClick={() => handleLikePost(data._id)}
            className={data.hasLiked ? 'pressed' : ''}
          >
            {data.hasLiked ? <LikeIcon /> : <LikeIcon />}
            <span>
              <FormattedMessage id="common.like" />
            </span>
          </button>
        </div>
        <div>
          <button type="button" onClick={handleCommentBox}>
            <CommentIcon />
            <span>
              <FormattedMessage id="common.commentVerb" />
            </span>
          </button>
        </div>
        {/*
        <div>
          <button disabled>
            <ShareIcon />
            <span><FormattedMessage id="common.share" /></span>
          </button>
        </div>
*/}
      </div>
      <CommentBox expanded={commentBoxState} post={data._id} />
    </PostContainer>
  );
};

export default PostCard;
