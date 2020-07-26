import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createProjectRequest } from '../../../actions/projects';
import {
  Container,
  Paper,
  Hero,
  Button,
  TextField,
  Select,
} from '../../../components/ui';

const NewProject = () => {
  const dispatch = useDispatch();

  const handleSubmit = useCallback((data) => {
    dispatch(createProjectRequest(data));
  }, []);

  return (
    <Container>
      <Hero
        title="Criar Projeto"
        description="Atraia público para sua iniciativa e os informe de novidades"
        actions={
          <Link to="/projects">
            <Button variant="outlined" color="primary">
              Cancelar
            </Button>
          </Link>
        }
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxWidth: 600,
          width: '100%',
          margin: '16px auto',
        }}
      >
        <Paper padding style={{ width: '100%', marginTop: 32 }}>
          <Form onSubmit={handleSubmit}>
            <TextField placeholder="Nome do Projeto" name="name" />
            <Select
              placeholder="Categoria"
              name="category"
              options={[
                {
                  label: 'Teste 1',
                  value: '1',
                },
                {
                  label: 'Teste 2',
                  value: '2',
                },
                {
                  label: 'Teste 3',
                  value: '3',
                },
              ]}
            />
            <TextField multiline placeholder="Descrição" name="description" />
            <Button fullWidth color="secondary" style={{ marginTop: 16 }}>
              Criar Projeto
            </Button>
          </Form>
        </Paper>
      </div>
    </Container>
  );
};

export default NewProject;
