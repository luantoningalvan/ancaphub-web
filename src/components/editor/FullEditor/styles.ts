import styled, { css } from 'styled-components';

export const EditorContainer = styled.div`
  ${(props) => css`
    border: 1px solid ${props.theme.palette.border};
  `};
  border-radius: 8px;
`;

export const EditorToolBar = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px 8px 0 0;

  ${(props) => css`
    background: ${props.theme.palette.paper};
    border-bottom: 1px solid ${props.theme.palette.border};
  `};

  .RichEditor-controls {
    & + .RichEditor-controls {
      margin-left: 24px;
    }
  }
`;

export const ToggleButton = styled.button<{ active?: boolean }>`
  border: none;
  border-radius: 2px;
  background: transparent;
  padding: 4px;
  color: ${(props) => props.theme.palette.text.primary};
  cursor: pointer;
  transition: background 0.2s;
  line-height: 1;
  svg {
    height: 22px;
    width: 22px;
  }

  ${(props) =>
    props.active &&
    css`
      background: rgba(0, 0, 0, 0.2);
    `}

  & + button {
    margin-left: 8px;
  }
`;

export const EditorContent = styled.div`
  padding: 16px;
  border-radius: 0 0 8px 8px;
  ${(props) => css`
    background: ${props.theme.palette.paper};
  `};
`;
