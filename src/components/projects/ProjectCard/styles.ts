import styled from 'styled-components';

export const ProjectCover = styled.div<{ cover: string }>`
  width: 100%;
  height: 170px;
  background: url('${(props) => props.cover}');
  background-size: cover;
  background-position: center;
`;

export const ProjectInfo = styled.div`
  padding: 20px;
  h4 {
    margin-bottom: 5px;
    a {
      font-size: 1.5rem;
      text-decoration: none;
      color: ${(props) => props.theme.palette.text.primary};
    }
  }

  span {
    text-decoration: none;
    color: ${(props) => props.theme.palette.text.secondary};
    display: block;
    font-size: 0.9rem;
  }
`;
