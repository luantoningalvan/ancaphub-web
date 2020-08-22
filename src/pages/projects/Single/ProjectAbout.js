import React from 'react';
import { convertFromRaw, EditorState, Editor } from 'draft-js';
import { About } from './styles';

const ProjectAbout = ({ project }) => {
  return (
    <About>
      {project.about !== null && (
        <Editor
          editorState={EditorState.createWithContent(
            convertFromRaw(JSON.parse(project.about))
          )}
        />
      )}
    </About>
  );
};

export default ProjectAbout;
