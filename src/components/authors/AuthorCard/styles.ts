import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AuthorCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AuthorAvatar = styled(Link)`
  img {
    border-radius: 50%;
    width: 128px;
    height: 128px;
  }
`;

export const AuthorTitle = styled.h3`
  margin-top: 16px;
  a {
    text-decoration: none;
    color: ${(props) => props.theme.palette.text.primary};
    text-align: center;
  }
`;
