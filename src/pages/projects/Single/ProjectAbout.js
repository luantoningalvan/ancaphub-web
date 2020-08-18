import React from 'react';
import { convertFromRaw, EditorState, Editor } from 'draft-js';
import { About } from './styles';

const ProjectAbout = ({ project }) => {
  const state = EditorState.createWithContent(
    convertFromRaw(JSON.parse(project.about))
  );
  return (
    <About>
      <Editor editorState={state} />
    </About>
  );
};

export default ProjectAbout;
