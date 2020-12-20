import React from 'react';
import ProjectFAQCard from '../../../../components/projects/ProjectFAQCard';

const ProjectFaq = ({ project }: any) => {
  return (
    <>
      {project.faq &&
        JSON.parse(project.faq).map((question: any) => (
          <ProjectFAQCard question={question} key={question.id} />
        ))}
    </>
  );
};
export default ProjectFaq;
