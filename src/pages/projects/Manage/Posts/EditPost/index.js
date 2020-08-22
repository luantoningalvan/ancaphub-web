import React, { useEffect } from 'react';
import { FiXCircle, FiEdit } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { Form } from '@unform/web';
import { convertToRaw } from 'draft-js';
import { useDispatch, useSelector } from 'react-redux';
import { PageHeader } from '../../styles';
import {
  Button,
  TextField,
  Paper,
  Breadcrumb,
  LoadContent,
} from '../../../../../components/ui';
import FullEditor from '../../../../../components/editor/FullEditor';
import {
  updateProjectPostRequest,
  getSingleProjectPostRequest,
} from '../../../../../actions/projects';

const NewPost = ({ project }) => {
  const dispatch = useDispatch();
  const { loadingPosts, post } = useSelector((state) => state.projects);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const postId = useQuery().get('postId');

  useEffect(() => {
    dispatch(getSingleProjectPostRequest({ postId, projectId: project._id }));
  }, [dispatch, postId, project]);

  const handleSubmit = ({ title, content }) => {
    const toRaw = JSON.stringify(convertToRaw(content.getCurrentContent()));

    dispatch(
      updateProjectPostRequest({
        projectId: project._id,
        postId,
        data: {
          title,
          content: toRaw,
        },
      })
    );
  };

  return (
    <LoadContent loading={loadingPosts}>
      <Form onSubmit={handleSubmit} initialData={post}>
        <PageHeader>
          <div className="page-title">
            <Breadcrumb
              list={[
                {
                  title: 'Postagens',
                  link: `/projects/${project._id}/manage/posts`,
                },
                { title: 'Nova' },
              ]}
            />
            <h2>Adicionar Postagem</h2>
          </div>
          <div style={{ display: 'flex' }}>
            <Link to="../posts">
              <Button color="primary" variant="outlined">
                <FiXCircle />
                Cancelar
              </Button>
            </Link>

            <Button type="submit" color="secondary" style={{ marginLeft: 8 }}>
              <FiEdit />
              Editar
            </Button>
          </div>
        </PageHeader>
        <Paper padding>
          <TextField name="title" placeholder="Título da postagem" />
          <FullEditor name="content" />
        </Paper>
      </Form>
    </LoadContent>
  );
};

export default NewPost;
