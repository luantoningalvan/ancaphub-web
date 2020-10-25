import styled from 'styled-components';

export const Category = styled.div`
  background: ${(props) => props.theme.palette.secondary};
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;

  a {
    color: ${(props) => props.theme.palette.text.contrast};
  }

  &:hover {
    filter: brightness(90%);
  }
`;
