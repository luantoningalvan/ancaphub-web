import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { convertFromRaw, Editor, EditorState } from 'draft-js';
import { LoadContent } from '../../../components/ui';
import { getSingleProjectPostRequest } from '../../../actions/projects';

const PostContainer = styled.div`
  margin: auto;
  border-radius: 8px;
  max-width: 650px;
  width: 100%;
  background: ${(props) => props.theme.palette.paper};
  margin-top: 32px;

  .thumbnail {
    height: 250px;
    overflow: hidden;
    border-radius: 8px 8px 0px 0px;

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

        <div className="content">
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
