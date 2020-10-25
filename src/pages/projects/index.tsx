import React, { useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProjectCard from '../../components/projects/ProjectCard';
import { getProjectsRequest } from '../../actions/projects';
import { LoadContent } from '../../components';
import { Button, Hero, Paper, Container, Grid } from 'snake-ui';

const Projects = () => {
  const { projects, loading } = useSelector((state: any) => state.projects);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectsRequest());
  }, [dispatch]);

  return (
    <>
      <Container>
        <Hero
          title={
            <FormattedMessage
              id="common.projects"
              description="Título da página de projetos"
            />
          }
          description={
            <FormattedMessage
              id="home.features.4"
              description="Descrição da página de projetos"
            />
          }
          actions={
            <Link to="/projects/new">
              <Button variant="contained" color="secondary">
                <FormattedMessage id="projects.create" />
              </Button>
            </Link>
          }
        />
        <h3 style={{ margin: '20px 0 10px' }}>
          <FormattedMessage id="projects.explore" />
        </h3>

        <LoadContent loading={loading}>
          {projects.length > 0 ? (
            <Grid container>
              {projects.map((project: any) => (
                <Grid xs={12} md={6} lg={4} key={project._id}>
                  <ProjectCard data={project} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <Paper padding>Nenhum projeto encontrado</Paper>
          )}
        </LoadContent>
      </Container>
    </>
  );
};

export default Projects;
