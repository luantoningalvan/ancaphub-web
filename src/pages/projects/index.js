import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import ProjectCard from '../../components/projects/ProjectCard';

import { Container, Hero, Button } from '../../components/ui';

const projects = [
  {
    name: 'AncapHub',
    cover:
      'https://pbs.twimg.com/profile_banners/1085703204141260800/1585659841/1500x500',
    peopleWatching: 1245,
    hasEnrolled: true,
    _id: 1,
  },
];

const Projects = () => (
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
            <Button type="contained" color="secondary">
              <FormattedMessage id="projects.create" />
            </Button>
          </Link>
        }
      />
      <h3 style={{ margin: '20px 0 10px' }}>
        <FormattedMessage id="projects.explore" />
      </h3>

      <div spacing={1}>
        {projects.map((project) => (
          <div xs={12} md={6} lg={4} key={project._id}>
            <ProjectCard data={project} />
          </div>
        ))}
      </div>
    </Container>
  </>
);

export default Projects;
