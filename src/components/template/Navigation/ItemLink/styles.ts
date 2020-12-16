import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Item = styled.li<{ position?: string }>`
  list-style: none;
  position: ${(props) => props.position};
  flex: 1;
  height: 64px;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &:hover {
    ul {
      display: block;
    }
  }

  @media (min-width: 576px) {
    height: 48px;
    width: 100%;
    flex: 0;
  }
`;

export const ItemLinkContainer = styled(Link)<{ current?: boolean }>`
  display: block;
  text-align: center;
  padding: 16px;
  border-bottom: 4px solid
    ${(props) =>
      props.current ? props.theme.palette.secondary : 'transparent'};
  height: 64px;

  color: ${(props) =>
    props.current
      ? props.theme.palette.secondary
      : props.theme.palette.text.primary};

  span {
    font-size: 17px;
    line-height: 20px;
    display: none;
  }

  i {
    font-size: 20px;
    height: 20px;
    display: block;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 576px) {
    margin: 4px 8px;
    height: 40px;
    padding: 8px;
    border-radius: 4px;
    border: none;

    ${(props) =>
      props.current &&
      css`
        background: ${props.theme.palette.secondary};
        color: #333;
      `};

    &:hover {
      background: ${(props) => props.theme.palette.secondary};
      color: #333;
    }
  }
`;
