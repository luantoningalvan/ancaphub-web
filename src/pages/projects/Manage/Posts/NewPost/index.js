import React from 'react';
import { FiXCircle, FiPlusCircle } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import { convertToRaw } from 'draft-js';
import { useDispatch } from 'react-redux';
import { Header } from '../styles';
import { Button, TextField, Paper } from '../../../../../components/ui';
import FullEditor from '../../../../../components/editor/FullEditor';
import { createProjectPostRequest } from '../../../../../actions/projects';

const NewPost = ({ project }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = ({ title, content }) => {
    const toRaw = JSON.stringify(convertToRaw(content.getCurrentContent()));
    dispatch(
      createProjectPostRequest({
        history,
        project: project._id,
        data: {
          title,
          content: toRaw,
        },
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Header>
        <h2>Nova Publicação</h2>

        <div style={{ display: 'flex' }}>
          <Link to="../posts">
            <Button color="primary" variant="outlined">
              <FiXCircle />
              Cancelar
            </Button>
          </Link>

          <Button type="submit" color="secondary" style={{ marginLeft: 8 }}>
            <FiPlusCircle />
            Adicionar
          </Button>
        </div>
      </Header>
      <Paper padding>
        <TextField name="title" placeholder="Título da postagem" />
        <FullEditor name="content" />
      </Paper>
    </Form>
  );
};

export default NewPost;
