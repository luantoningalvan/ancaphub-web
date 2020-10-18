import styled from 'styled-components';

export const CommentFormContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 16px;
`;

export const CommentInput = styled.input`
  padding: 15px;
  border-radius: 20px;
  background: transparent;
  outline: none;
  border: 1px solid ${(props) => props.theme.palette.border};
  flex-grow: 1;
  color: ${(props) => props.theme.palette.text.primary};
`;
