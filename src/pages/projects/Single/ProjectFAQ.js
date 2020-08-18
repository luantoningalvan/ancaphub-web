import React from 'react';
import ProjectFAQCard from '../../../components/projects/ProjectFAQCard';

const ProjectFaq = ({ project }) => {
  return (
    <>
      {project.faq.map((question) => (
        <ProjectFAQCard question={question} key={question._id} />
      ))}
    </>
  );
};
export default ProjectFaq;
