import React from 'react';
import { Form } from '@unform/web';
import { SubmitHandler } from '@unform/core';
import { useDispatch } from 'react-redux';
import { convertToRaw } from 'draft-js';
import { Button, Breadcrumbs, Grid, Paper } from 'snake-ui';
import { PageHeader } from '../../styles';
import FullEditor from '../../../../../components/editor/FullEditor';
import { updateProjectAboutRequest } from '../../../../../redux/actions/projects';

const About: React.FC<{ project: any }> = ({ project }) => {
  const dispatch = useDispatch();

  const handleSubmit: SubmitHandler = (data) => {
    const toRaw = JSON.stringify(convertToRaw(data.about.getCurrentContent()));

    dispatch(
      updateProjectAboutRequest({
        data: { about: toRaw },
        id: project.id,
      })
    );
  };

  return (
    <Form onSubmit={handleSubmit} initialData={{ about: project.about }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PageHeader>
            <div className="page-title">
              <Breadcrumbs list={[{ title: 'Seções' }, { title: 'Sobre' }]} />
              <h2>Sobre</h2>
            </div>

            <Button type="submit" color="secondary">
              Salvar
            </Button>
          </PageHeader>
        </Grid>
        <Grid item xs={12}>
          <Paper padding>
            <FullEditor name="about" />
          </Paper>
        </Grid>
      </Grid>
    </Form>
  );
};

export default About;
