import React, { useCallback } from 'react';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { createProjectRequest } from '../../../redux/actions/projects';
import { TextField, Select } from '../../../components';
import { Container, Paper, Hero, Button, Grid } from 'snake-ui';
import projectCategories from '../../../assets/project-categories';

const NewProject = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = useCallback(
    (data) => {
      dispatch(createProjectRequest({ data, history }));
    },
    [dispatch, history]
  );

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
        <Paper
          padding
          style={{ width: '100%', marginTop: 32, overflow: 'inherit' }}
        >
          <Form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField placeholder="Nome do Projeto" name="name" />
              </Grid>
              <Grid item xs={12}>
                <Select
                  placeholder="Categoria"
                  name="category"
                  options={Object.entries(projectCategories).map((a) => ({
                    value: a[0],
                    label: a[1],
                  }))}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  placeholder="Descrição curta"
                  name="description"
                />
              </Grid>
              <Grid item xs={12}>
                <Button fullWidth color="secondary" type="submit">
                  Criar Projeto
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Paper>
      </div>
    </Container>
  );
};

export default NewProject;
