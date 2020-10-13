import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  ul {
    display: flex;
    flex-direction: column;
  }
`;

export const Item = styled.li<{ position?: string }>`
  list-style: none;
  position: ${(props) => props.position};

  a {
    display: flex;
    align-items: center;
  }

  & + li {
    margin-top: 8px;
  }

  &:hover {
    ul {
      display: block;
    }
  }
`;

export const MenuItemButtonContainer = styled.button`
  display: flex;
  border: none;
  background: transparent;
  padding: 8px;
  cursor: pointer;
  margin: 16px;

  span {
    font-size: 17px;
    line-height: 20px;
    display: block;
  }

  i {
    margin-right: 16px;
    font-size: 20px;
    height: 20px;
    display: block;
  }

  color: ${(props) => props.theme.palette.text.primary};

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  @media (min-width: 576px) {
    border-radius: 50%;
    height: 40px;
    width: 40px;
    margin: 12px;
    span {
      display: none;
    }

    i {
      margin: 0px;
    }
  }
`;

export const MenuItemLinkContainer = styled(Link)<{ current?: boolean }>`
  display: block;
  text-align: center;
  margin-right: 16px;
  padding: 8px 16px;
  border-radius: 0px 20px 20px 0px;

  background: ${(props) =>
    props.current ? props.theme.palette.secondary : 'transparent'};

  span {
    font-size: 17px;
    line-height: 20px;
    display: block;
  }
  i {
    margin-right: 16px;
    font-size: 20px;
    height: 20px;
    display: block;
  }

  color: ${(props) =>
    props.current ? '#333' : props.theme.palette.text.primary};

  &:hover {
    ${(props) => css`
      background: ${props.theme.palette.secondary};
      color: #333;
    `}
  }

  @media (min-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 8px;
    padding: 8px 0px;
    border-radius: 4px;

    i {
      margin-right: 0px;
      font-size: 20px;
    }
    span {
      display: none;
    }
  }
`;
