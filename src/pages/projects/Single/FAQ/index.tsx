import React from 'react';
import ProjectFAQCard from '../../../../components/projects/ProjectFAQCard';

const ProjectFaq = ({ project }: any) => {
  return (
    <>
      {project.faq.map((question: any) => (
        <ProjectFAQCard question={question} key={question._id} />
      ))}
    </>
  );
};
export default ProjectFaq;
