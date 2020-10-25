import { getDefaultKeyBinding, RichUtils } from 'draft-js';

const basicTextStylePlugin = {
  keyBindingFn(event: any) {
    return getDefaultKeyBinding(event);
  },

  handleKeyCommand(command: any, editorState: any, { setEditorState }: any) {
    const newEditorState = RichUtils.handleKeyCommand(editorState, command);
    if (newEditorState) {
      setEditorState(newEditorState);
      return 'handled';
    }
    return 'not-handled';
  },
};

export default basicTextStylePlugin;
