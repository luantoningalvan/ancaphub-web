import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FormattedRelativeTime,
  FormattedMessage,
  FormattedPlural,
} from 'react-intl';
import { parseISO, getTime, differenceInSeconds } from 'date-fns';
import { Editor, EditorState, convertFromRaw } from 'draft-js';
import { PostContent, PostContentWrapper, PostContainer } from './styles';
// @ts-ignore
import createLinkifyPlugin from 'draft-js-linkify-plugin';
// @ts-ignore
import createHashtagPlugin from 'draft-js-hashtag-plugin';

import 'draft-js-hashtag-plugin/lib/plugin.css';

import ReactPlayer from 'react-player';

import {
  FiMoreVertical as MdMore,
  FiThumbsUp as LikeIcon,
  FiMessageSquare as CommentIcon,
  FiTrash as DeleteIcon,
} from 'react-icons/fi';

import { useDispatch } from 'react-redux';
import UserName from '../../users/UserName';
import basicTextStylePlugin from '../../editor/plugins/basicTextStylePlugin';
import linkPluginOptions from '../../editor/plugins/addLinkPlugin';
import { getAllDecorators } from '../../editor/utils/decorators';
import CommentBox from '../../comments/CommentBox';

import {
  ImageBox,
  ConfirmationDialog,
  DropdownListContainer,
  DropdownListItem,
} from '../../ui';
import { IconButton, Dropdown } from 'snake-ui';

import defaultProfilePicture from '../../../assets/default-profile-picture.jpg';
import LikeBox from '../ShowPostLikes';
import PostPoll from '../PostPoll';
import { likePostRequest, deletePostRequest } from '../../../actions/posts';

interface PostCardProps {
  data: {
    id: string;
    content: string;
    user: {
      id: string;
      avatar: string;
      username: string;
    };
    hasLiked: boolean;
    media: any;
    mediaType: any;
    createdAt: string;
    commentCount: number;
    likeCount: number;
  };
}

const PostCard: React.FC<PostCardProps> = ({ data }) => {
  const [commentBoxState, setCommenteBoxState] = useState(false);
  const [likeBoxState, setLikeBoxState] = useState(false);
  const [deleteDialogState, setDeleteDialogState] = useState(false);
  const [postMenu, setPostMenu] = useState(null);

  const dispatch = useDispatch();

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
          {/* @ts-ignore */}
          <Editor editorState={editorState} readOnly plugins={plugins} />
        </PostContentWrapper>
      );
    } catch (error) {
      return <PostContent>{data.content}</PostContent>;
    }
  };

  const handleCommentBox = () => setCommenteBoxState(!commentBoxState);

  const handleDelete = () => setDeleteDialogState(!deleteDialogState);

  const handleLikePost = (id: string) => {
    dispatch(likePostRequest(id));
  };

  const handleDeletePost = (id: string) => {
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
        <div style={{ flex: 1 }}>
          <Link to={`/${data.user.username}`}>
            <UserName user={data.user} />
          </Link>
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

        <div>
          <IconButton
            icon={<MdMore fontSize="24px" />} //@ts-ignore
            onClick={(e: any) => setPostMenu(e.currentTarget)}
          />
          <Dropdown
            anchorEl={postMenu}
            onClose={() => setPostMenu(null)}
            open={Boolean(postMenu)}
            placement="left"
          >
            <DropdownListContainer>
              <DropdownListItem icon={<DeleteIcon />} onClick={handleDelete}>
                <FormattedMessage id="common.delete" />
              </DropdownListItem>
            </DropdownListContainer>
          </Dropdown>
        </div>
        <ConfirmationDialog
          show={deleteDialogState}
          onClose={handleDelete}
          onConfirm={() => handleDeletePost(data.id)}
          title={<FormattedMessage id="common.delete" />}
          message={<FormattedMessage id="components.postCard.confirmDelete" />}
        />
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
                value={data.likeCount}
                one={
                  <FormattedMessage id="common.likeNoun">
                    {(txt: string) => <>{txt.toLowerCase()}</>}
                  </FormattedMessage>
                }
                other={
                  <FormattedMessage id="common.likePlural">
                    {(txt: string) => <>{txt.toLowerCase()}</>}
                  </FormattedMessage>
                }
              />
            </span>
            <span role="presentation" onClick={handleCommentBox}>
              {` ${data.commentCount} `}
              <FormattedPlural
                value={data.commentCount}
                one={
                  <FormattedMessage id="common.comment">
                    {(txt: string) => <>{txt.toLowerCase()}</>}
                  </FormattedMessage>
                }
                other={
                  <FormattedMessage id="common.comments">
                    {(txt: string) => <>{txt.toLowerCase()}</>}
                  </FormattedMessage>
                }
              />
            </span>
            <LikeBox
              open={likeBoxState}
              onClose={() => setLikeBoxState(false)}
              postId={data.id}
            />
          </div>
        )}
      </div>

      <div className="post-actions">
        <div>
          <button
            type="button"
            onClick={() => handleLikePost(data.id)}
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
      <CommentBox expanded={commentBoxState} post={data.id} />
    </PostContainer>
  );
};

export default PostCard;
