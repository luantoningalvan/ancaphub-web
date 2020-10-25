import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

type Props = {
  fontSize?: number;
  isVerified: boolean;
};

export const UserNameStyle = styled(Link)<Props>`
  font-weight: bold;
  color: inherit;
  text-decoration: none;
  font-size: ${(props) => props.fontSize || 15}em;

  ${(props) =>
    props.isVerified &&
    css`
      background: ${(props) => props.theme.palette.secondary};
      border-radius: 15px;
      color: ${(props) => props.theme.palette.text.primary};
      padding: 5px 10px;
      margin-right: 5px;
    `}
`;
