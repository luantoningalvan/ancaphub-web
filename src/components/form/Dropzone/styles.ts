import styled, { css } from 'styled-components';

export const DroppableArea = styled.div<{ [key: string]: any }>`
  border-radius: 4px;
  border: 1px dashed ${(props) => props.theme.palette.border};
  position: relative;
  outline: none;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `};

  .backdrop {
    display: none;
  }

  ${(props) =>
    props.isOver &&
    css`
      .backdrop {
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgba(255, 255, 255, 0.1);
        color: black;
        top: 0;
        left: 0;
        border-radius: 4px;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
      }
      .blur {
        filter: blur(6px);
        pointer-events: none;
      }
    `}
`;

export const EmptyList = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.palette.text.secondary};
  width: 100%;
  cursor: pointer;
  padding: 16px;
`;

export const FileList = styled.div`
  padding: 16px;
`;

export const FileListItem = styled.div<{
  loading: boolean;
  state: 'success' | 'error';
}>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 48px;
  margin-bottom: 16px;

  ${(props) =>
    props.loading &&
    css`
      > svg {
        opacity: 0.5;
      }

      .file-info {
        opacity: 0.5;
        pointer-events: none;
      }
    `}
  > svg {
    width: 48px;
    height: 48px;
  }

  .file-info {
    display: flex;
    flex-direction: column;
    margin: 0px 16px;
    flex: 1;

    > div {
      display: flex;
      margin-top: 4px;
      button {
        background: transparent;
        border: none;
        outline: none;
        font-style: normal;
        cursor: pointer;
        color: ${(props) => props.theme.palette.text.secondary};
        margin-left: 8px;
      }
    }
  }

  .upload-state-icon {
    svg {
      height: 22px;
      width: 22px;
      margin: 0px;
      color: ${(props) =>
        props.state === 'success'
          ? props.theme.palette.success
          : props.theme.palette.danger};
    }
  }
`;

export const Avatar = styled.div<{ src?: string }>`
  height: 42px;
  width: 42px;
  overflow: hidden;
  border-radius: 100%;
  background-image: url(${(props) => props.src});
  background-size: cover;
  margin-right: 10px;
`;
