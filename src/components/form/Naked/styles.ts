import styled from 'styled-components';

export const NakedInputContainer = styled.input`
  border: none;
  outline: none;
  background: transparent;
  color: ${(props) => props.theme.palette.text.primary};
  font-size: 1rem;
`;
