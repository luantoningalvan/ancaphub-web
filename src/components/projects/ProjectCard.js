import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Paper } from '../ui';
import defaultProjectCover from '../../assets/default-group-cover.png';
import FollowProjectButton from './FollowProjectButton';

const ProjectCover = styled.div`
  width: 100%;
  height: 170px;
  background: url("${(props) => props.cover}");
  background-size: cover;
  background-position: center;
`;

const ProjectInfo = styled.div`
  padding: 20px;
  h4 {
    margin-bottom: 5px;
  }
  a {
    text-decoration: none;
    color: ${(props) => props.theme.palette.text.primary};
  }
  span {
    text-decoration: none;
    color: ${(props) => props.theme.palette.text.secondary};
    display: block;
    margin-bottom: 15px;
  }
`;

const ProjectCard = ({ data }) => {
  const { _id, name, cover, peopleWatching } = data;
  return (
    <div style={{ width: '100%' }}>
      <Paper>
        <Link to={`/projects/${_id}`}>
          <ProjectCover cover={cover || defaultProjectCover} />
        </Link>
        <ProjectInfo>
          <h4>
            <Link to="/projects/id">{name}</Link>
          </h4>
          <span>
            <FormattedMessage
              id="projects.peopleWatching"
              values={{ people: peopleWatching }}
            />
          </span>
          <FollowProjectButton project={_id} />
        </ProjectInfo>
      </Paper>
    </div>
  );
};

ProjectCard.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    cover: PropTypes.string,
    peopleWatching: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    hasEnrolled: PropTypes.bool,
  }).isRequired,
};

export default ProjectCard;
