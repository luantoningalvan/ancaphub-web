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
  FiShare2 as ShareIcon,
} from 'react-icons/fi';

import { useDispatch } from 'react-redux';
import UserName from '../../users/UserName';
import basicTextStylePlugin from '../../editor/plugins/basicTextStylePlugin';
import linkPluginOptions from '../../editor/plugins/addLinkPlugin';
import { getAllDecorators } from '../../editor/utils/decorators';
import CommentBox from '../../comments/CommentBox';

import { ImageBox, ConfirmationDialog } from '../..';
import { IconButton, Menu } from 'snake-ui';

import defaultProfilePicture from '../../../assets/default-profile-picture.jpg';
import LikeBox from '../ShowPostLikes';
import PostPoll from '../PostPoll';
import {
  likePostRequest,
  deletePostRequest,
  sharePostRequest,
  unlikePostRequest,
} from '../../../redux/actions/posts';

interface PostCardProps {
  data: {
    id: string;
    content: string;
    user: {
      id: string;
      avatar?: string;
      avatar_url?: string;
      username: string;
    };
    hasLiked: boolean;
    hasShared: boolean;
    image?: string;
    image_url?: string;
    media?: string;
    poll?: {
      question: string;
      options: { text: string; id: string }[];
    };
    created_at: string;
    spread_count: number;
    comment_count: number;
    favorite_count: number;
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
  const plugins: any = [linkifyPlugin, basicTextStylePlugin, hashtagPlugin];

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

  const handleDelete = () => {
    setPostMenu(null);
    setDeleteDialogState(!deleteDialogState);
  };

  const handleLikePost = (id: string) => {
    dispatch(likePostRequest(id));
  };

  const handleUnikePost = (id: string) => {
    dispatch(unlikePostRequest(id));
  };

  const handleSharePost = (id: string) => {
    dispatch(sharePostRequest(id));
  };

  const handleDeletePost = (id: string) => {
    dispatch(deletePostRequest(id));
  };

  return (
    <>
      {data.hasShared && (
        <span
          style={{
            color: '#2699bd',
            display: 'flex',
            alignItems: 'center',
            margin: '8px 0px',
          }}
        >
          <ShareIcon style={{ marginRight: 8 }} />
          <span>
            <b>Você</b> repassou esta postagem
          </span>
        </span>
      )}
      <PostContainer>
        <div className="post-header">
          <Link to={`/${data.user.username}`}>
            <div className="profile-picture">
              <img
                alt="user avatar"
                src={
                  data.user.avatar_url
                    ? data.user.avatar_url
                    : defaultProfilePicture
                }
              />
            </div>
          </Link>

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
                    getTime(parseISO(data.created_at))
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
            <Menu
              anchorEl={postMenu}
              onClose={() => setPostMenu(null)}
              open={Boolean(postMenu)}
              placement="left"
              options={[
                {
                  label: <FormattedMessage id="common.delete" />,
                  onClick: handleDelete,
                  icon: <DeleteIcon />,
                },
              ]}
            />
          </div>
          <ConfirmationDialog
            show={deleteDialogState}
            onClose={handleDelete}
            onConfirm={() => handleDeletePost(data.id)}
            title={<FormattedMessage id="common.delete" />}
            message={
              <FormattedMessage id="components.postCard.confirmDelete" />
            }
          />
        </div>

        <div style={{ padding: 16 }}>
          {/* Show post content  */}
          {showPostContent()}
          {/* If post has embed media type */}
          {data.media && (
            <ReactPlayer
              url={data.media}
              controls
              light
              style={{ marginTop: 16 }}
              width="100%"
            />
          )}

          {data.image && <ImageBox src={data.image_url as string} />}

          {data.poll && <PostPoll post={data.poll} />}

          {(data.favorite_count > 0 || data.comment_count > 0) && (
            <div className="post-counts">
              <span onClick={() => setLikeBoxState(true)} role="presentation">
                {`${data.favorite_count} `}
                <FormattedPlural
                  value={data.favorite_count}
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
                {` ${data.comment_count} `}
                <FormattedPlural
                  value={data.comment_count}
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
              onClick={() =>
                data.hasLiked
                  ? handleUnikePost(data.id)
                  : handleLikePost(data.id)
              }
              className={data.hasLiked ? 'pressed' : ''}
            >
              <LikeIcon />
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
          {/**
           * <div>
            <button
              onClick={() => handleSharePost(data.id)}
              className={data.hasShared ? 'pressed' : ''}
            >
              <ShareIcon />
              <span>Repassar</span>
            </button>
          </div>
           */}
        </div>
        <CommentBox expanded={commentBoxState} post={data.id} />
      </PostContainer>
    </>
  );
};

export default PostCard;
