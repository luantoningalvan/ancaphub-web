import styled, { css } from 'styled-components';

export const EditorContainer = styled.div<{ fullScreen?: boolean }>`
  ${(props) => css`
    border: 1px solid ${props.theme.palette.border};
    background: ${props.theme.palette.paper};
  `};

  border-radius: 8px;
  min-height: 200px;

  ${(props) =>
    props.fullScreen &&
    css`
      width: 100%;
      height: 100vh;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 200;
    `}
`;

export const EditorToolBar = styled.div`
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px 8px 0 0;

  > div {
    display: flex;
  }

  border-bottom: 1px solid ${(props) => props.theme.palette.border};

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
`;
