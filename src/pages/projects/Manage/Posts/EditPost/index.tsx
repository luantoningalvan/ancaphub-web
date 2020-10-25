import React, { useEffect } from 'react';
import { FiXCircle, FiEdit } from 'react-icons/fi';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { SubmitHandler } from '@unform/core';
import { Form } from '@unform/web';
import { convertToRaw } from 'draft-js';
import { useDispatch, useSelector } from 'react-redux';
import { PageHeader } from '../../styles';
import { Button, Paper, Breadcrumbs } from 'snake-ui';
import { TextField, LoadContent } from '../../../../../components';

import FullEditor from '../../../../../components/editor/FullEditor';
import {
  updateProjectPostRequest,
  getSingleProjectPostRequest,
} from '../../../../../actions/projects';

const NewPost = ({ project }: any) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { loadingPosts, post } = useSelector((state: any) => state.projects);

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const postId = useQuery().get('postId');

  useEffect(() => {
    dispatch(getSingleProjectPostRequest({ postId, projectId: project._id }));
  }, [dispatch, postId, project]);

  const handleSubmit: SubmitHandler = ({ title, content }) => {
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
            <Breadcrumbs
              list={[
                {
                  title: 'Postagens',
                  onClick: () =>
                    history.push(`/projects/${project._id}/manage/posts`),
                },
                { title: 'Nova' },
              ]}
            />
            <h2>Editar Postagem</h2>
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
          {/* @ts-ignore */}
          <FullEditor name="content" />
        </Paper>
      </Form>
    </LoadContent>
  );
};

export default NewPost;
