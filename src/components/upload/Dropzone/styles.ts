import styled, { css } from 'styled-components';

const dragActive = css`
  border-color: ${(props) => props.theme.palette.secondary};
`;

const dragReject = css`
  border-color: #e83f5b;
`;

export const DropContainer = styled.div<{
  isDragActive?: boolean;
  isDragReject?: boolean;
}>`
  border: 1.5px dashed ${(props) => props.theme.palette.border};
  border-radius: 5px;
  cursor: pointer;

  transition: height 0.2s ease;

  ${(props) => props.isDragActive && dragActive}

  ${(props) => props.isDragReject && dragReject}
`;

export const UploadMessage = styled.p<{ type?: string }>`
  display: flex;
  font-size: 16px;
  line-height: 24px;
  padding: 48px 0;

  color: ${(props) => props.theme.palette.secondary};

  justify-content: center;
  align-items: center;
`;
