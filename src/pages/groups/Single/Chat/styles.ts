import styled from 'styled-components';

export const Textarea = styled.textarea<{ hasError?: boolean }>`
  background: transparent;
  border: 1px solid
    ${(props) => (!props.hasError ? props.theme.palette.border : '#f93c3c')};
  padding: 16px;
  border-radius: 8px;
  outline: none;
  color: white;
  width: 100%;
  height: calc(100vh - 244px);
`;
