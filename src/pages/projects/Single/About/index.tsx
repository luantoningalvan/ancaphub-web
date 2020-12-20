import React from 'react';
import { convertFromRaw, EditorState, Editor } from 'draft-js';
import { About } from './styles';

const ProjectAbout = ({ project }: any) => {
  return (
    <About>
      {project.about !== null ? ( //@ts-ignore
        <Editor
          editorState={EditorState.createWithContent(
            convertFromRaw(JSON.parse(project.about))
          )}
        />
      ) : (
        <p>Nada por aqui</p>
      )}
    </About>
  );
};

export default ProjectAbout;
