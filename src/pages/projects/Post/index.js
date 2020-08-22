import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { convertFromRaw, Editor, EditorState } from 'draft-js';
import { FiCalendar as CalendarIcon } from 'react-icons/fi';
import { FormattedDate } from 'react-intl';
import { parseISO, addDays } from 'date-fns';
import { LoadContent } from '../../../components/ui';
import { getSingleProjectPostRequest } from '../../../actions/projects';
import defaultProjectAvatar from '../../../assets/default-project-avatar.png';

const PostContainer = styled.div`
  margin: auto;
  border-radius: 8px;
  max-width: 650px;
  width: 100%;
  background: ${(props) => props.theme.palette.paper};
  margin-top: 32px;
  position: relative;

  .thumbnail {
    height: 250px;
    overflow: hidden;
    border-radius: 8px 8px 0px 0px;
    position: relative;

    img {
      width: 100%;
    }
  }

  .content {
    h2 {
      font-size: 2em;
      margin-bottom: 8px;
    }
    padding: 16px;
  }

  .project-avatar {
    width: 64px;
    height: 64px;
    position: absolute;
    top: 218px;
    right: 16px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    border-radius: 50%;

    img {
      width: 100%;
      border-radius: 50%;
    }
  }

  .date {
    display: flex;
    margin-bottom: 8px;
    align-items: center;
    color: ${(props) => props.theme.palette.text.secondary};
    font-size: 0.8em;
    svg {
      height: 20px;
      width: 20px;
      margin-right: 8px;
    }
  }
`;

const ProjectPost = () => {
  const dispatch = useDispatch();
  const { projectId, postId } = useParams();
  const { post, loadingPosts } = useSelector((state) => state.projects);

  useEffect(() => {
    dispatch(getSingleProjectPostRequest({ projectId, postId }));
  }, [dispatch, projectId, postId]);

  return (
    <LoadContent loading={loadingPosts}>
      <PostContainer>
        <div className="thumbnail">
          <img src={post.thumbnail} alt={post.title} />
        </div>

        {post.project && (
          <div className="project-avatar">
            <Link to={`/projects/${post.project._id}`}>
              <img
                src={post.project.avatar || defaultProjectAvatar}
                alt={post.project.name}
                title={post.project.name}
              />
            </Link>
          </div>
        )}

        <div className="content">
          <div className="date">
            <CalendarIcon />
            <span>
              <FormattedDate
                // DISCLAIMER: this is a temporary solution since
                // we still don't know why this bug is happening
                value={addDays(parseISO(post.createdAt), 1)}
                year="numeric"
                month="long"
                day="2-digit"
              />
            </span>
          </div>
          <h2>{post.title}</h2>
          <Editor
            editorState={
              post.content
                ? EditorState.createWithContent(
                    convertFromRaw(JSON.parse(post.content))
                  )
                : EditorState.createEmpty()
            }
          />
        </div>
      </PostContainer>
    </LoadContent>
  );
};

export default ProjectPost;
