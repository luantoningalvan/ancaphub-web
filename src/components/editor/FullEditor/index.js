/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable consistent-return */

import React, { useState, useRef, useEffect } from 'react';
import { useField } from '@unform/core';
import shortId from 'shortid';
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatQuote,
  MdCode,
} from 'react-icons/md';
import { Editor, EditorState, RichUtils, getDefaultKeyBinding } from 'draft-js';
import {
  EditorContainer,
  EditorToolBar,
  ToggleButton,
  EditorContent,
} from './styles';
import 'draft-js/dist/Draft.css';

function getBlockStyle(block) {
  switch (block.getType()) {
    case 'blockquote':
      return 'RichEditor-blockquote';
    default:
      return null;
  }
}

const StyleButton = ({ style, label, active, onToggle }) => {
  return (
    <ToggleButton
      className="RichEditor-styleButton"
      active={active}
      onMouseDown={() => onToggle(style)}
    >
      {label}
    </ToggleButton>
  );
};

const BLOCK_TYPES = [
  { label: <MdFormatListNumbered />, style: 'unordered-list-item' },
  { label: <MdFormatListBulleted />, style: 'ordered-list-item' },
  { label: <MdFormatQuote />, style: 'blockquote' },
  { label: <MdCode />, style: 'code-block' },
];

const BlockStyleControls = (props) => {
  const { editorState } = props;
  const selection = editorState.getSelection();
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType();

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map((type) => (
        <StyleButton
          key={`block-style-${shortId()}`}
          active={type.style === blockType}
          label={type.label}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

const INLINE_STYLES = [
  { label: <MdFormatBold />, style: 'BOLD' },
  { label: <MdFormatItalic />, style: 'ITALIC' },
  { label: <MdFormatUnderlined />, style: 'UNDERLINE' },
];

const InlineStyleControls = ({ editorState, onToggle }) => {
  const currentStyle = editorState.getCurrentInlineStyle();

  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map((type) => (
        <StyleButton
          key={`inline-style-${shortId()}`}
          active={currentStyle.has(type.style)}
          label={type.label}
          onToggle={onToggle}
          style={type.style}
        />
      ))}
    </div>
  );
};

const FullEditor = ({
  name,
  icon: Icon,
  placeholder,
  multiline,
  initialState,
  readOnly,
  ...rest
}) => {
  const { fieldName, error, registerField } = useField(name);
  const [editorState, setEditorState] = useState(() => {
    if (!initialState) {
      return EditorState.createEmpty();
    }
    return EditorState.createWithContent(initialState);
  });
  const editor = useRef(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: editor.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  const focus = () => editor.current.focus();
  const onChange = (state) => {
    setEditorState(state);
    editor.current.value = state;
  };

  const handleKeyCommand = (command, state) => {
    const newState = RichUtils.handleKeyCommand(state, command);
    if (newState) {
      onChange(newState);
      return true;
    }
    return false;
  };

  const mapKeyToEditorCommand = (e) => {
    if (e.keyCode === 9 /* TAB */) {
      const newEditorState = RichUtils.onTab(e, editorState, 4);
      if (newEditorState !== editorState) {
        onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  };

  const toggleBlockType = (blockType) => {
    onChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle) => {
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  let className = 'RichEditor-editor';
  const contentState = editorState.getCurrentContent();
  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== 'unstyled') {
      className += ' RichEditor-hidePlaceholder';
    }
  }

  return (
    <div className="RichEditor-root">
      <EditorContainer isErrored={!!error} {...rest}>
        <EditorToolBar>
          <BlockStyleControls
            editorState={editorState}
            onToggle={toggleBlockType}
          />
          <InlineStyleControls
            editorState={editorState}
            onToggle={toggleInlineStyle}
          />
        </EditorToolBar>
        <EditorContent>
          <div className={className} onClick={focus}>
            <Editor
              blockStyleFn={getBlockStyle}
              editorState={editorState}
              handleKeyCommand={handleKeyCommand}
              keyBindingFn={mapKeyToEditorCommand}
              onChange={onChange}
              placeholder="Escreva aqui..."
              ref={editor}
              spellCheck
            />
          </div>
        </EditorContent>
      </EditorContainer>
    </div>
  );
};

export default FullEditor;
