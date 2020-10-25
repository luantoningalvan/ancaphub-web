import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { convertFromRaw, Editor, EditorState } from 'draft-js';
import { FiCalendar as CalendarIcon } from 'react-icons/fi';
import { FormattedDate } from 'react-intl';
import { parseISO, addDays } from 'date-fns';
import { LoadContent } from '../../../components';
import { getSingleProjectPostRequest } from '../../../redux/actions/projects';
import defaultProjectAvatar from '../../../assets/default-project-avatar.png';
import { PostContainer } from './styles';

const ProjectPost = () => {
  const dispatch = useDispatch();
  const {
    projectId,
    postId,
  }: { projectId: string; postId: string } = useParams();
  const { post, loadingPosts } = useSelector((state: any) => state.projects);

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
          {/* @ts-ignore */}
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
