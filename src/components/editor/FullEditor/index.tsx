import React, { useState, useRef, useEffect, useCallback } from "react";
import { useField } from "@unform/core";
import shortId from "shortid";
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdFormatListBulleted,
  MdFormatListNumbered,
  MdFormatQuote,
  MdCode,
  MdFullscreen,
} from "react-icons/md";
import {
  Editor,
  EditorState,
  RichUtils,
  getDefaultKeyBinding,
  convertFromRaw,
} from "draft-js";
import {
  EditorContainer,
  EditorToolBar,
  ToggleButton,
  EditorContent,
} from "./styles";
import "draft-js/dist/Draft.css";
import { IconButton } from "snake-ui";

function getBlockStyle(block: any) {
  switch (block.getType()) {
    case "blockquote":
      return "RichEditor-blockquote";
    default:
      return null;
  }
}

type StyleButtonProps = {
  style: string;
  label: string | JSX.Element;
  active: boolean;
  onToggle(style: string): void;
};

const StyleButton = ({ style, label, active, onToggle }: StyleButtonProps) => {
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
  { label: <MdFormatListNumbered />, style: "unordered-list-item" },
  { label: <MdFormatListBulleted />, style: "ordered-list-item" },
  { label: <MdFormatQuote />, style: "blockquote" },
  { label: <MdCode />, style: "code-block" },
];

const BlockStyleControls = (props: any) => {
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
  { label: <MdFormatBold />, style: "BOLD" },
  { label: <MdFormatItalic />, style: "ITALIC" },
  { label: <MdFormatUnderlined />, style: "UNDERLINE" },
];

const InlineStyleControls = ({ editorState, onToggle }: any) => {
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

interface FullEditorProps {
  name: string;
  icon?: JSX.Element;
  placeholder?: string;
  multiline?: boolean;
  initialState?: any;
  readOnly?: boolean;
}

const FullEditor: React.FC<FullEditorProps> = (props) => {
  const {
    name,
    icon: Icon,
    placeholder,
    multiline,
    initialState,
    readOnly,
    ...rest
  } = props;

  const { fieldName, error, registerField, defaultValue } = useField(name);
  const [editorState, setEditorState] = useState(() => {
    if (!defaultValue) {
      return EditorState.createEmpty();
    }
    return EditorState.createWithContent(
      convertFromRaw(JSON.parse(defaultValue))
    );
  });
  const [fullScreen, setFullScreen] = useState(false);

  const editor = useRef<Editor | null>(null);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: editor.current,
      path: "value",
    });
  }, [fieldName, registerField]);

  const focus = () => editor?.current?.focus();

  const onChange = useCallback((state) => {
    setEditorState(state);
  }, []);

  useEffect(() => {
    // @ts-ignore
    editor.current.value = editorState;
  }, [editorState]);

  const handleKeyCommand = (command: any, state: EditorState) => {
    const newState = RichUtils.handleKeyCommand(state, command);
    if (newState) {
      onChange(newState);
      return true;
    }
    return false;
  };

  const mapKeyToEditorCommand = (e: any) => {
    if (e.key === "9") {
      const newEditorState = RichUtils.onTab(e, editorState, 4);
      if (newEditorState !== editorState) {
        onChange(newEditorState);
      }
      return;
    }
    return getDefaultKeyBinding(e);
  };

  const toggleBlockType = (blockType: string) => {
    onChange(RichUtils.toggleBlockType(editorState, blockType));
  };

  const toggleInlineStyle = (inlineStyle: string) => {
    onChange(RichUtils.toggleInlineStyle(editorState, inlineStyle));
  };

  let className = "RichEditor-editor";
  const contentState = editorState.getCurrentContent();
  if (!contentState.hasText()) {
    if (contentState.getBlockMap().first().getType() !== "unstyled") {
      className += " RichEditor-hidePlaceholder";
    }
  }

  return (
    <div className="RichEditor-root">
      <EditorContainer fullScreen={fullScreen} isErrored={!!error} {...rest}>
        <EditorToolBar>
          <div>
            <BlockStyleControls
              editorState={editorState}
              onToggle={toggleBlockType}
            />
            <InlineStyleControls
              editorState={editorState}
              onToggle={toggleInlineStyle}
            />
          </div>
          <IconButton
            icon={<MdFullscreen />}
            onClick={() => setFullScreen(!fullScreen)}
          />
        </EditorToolBar>
        <EditorContent>
          <div className={className} onClick={focus}>
            {/* @ts-ignore */}
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
