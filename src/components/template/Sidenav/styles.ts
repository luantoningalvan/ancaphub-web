import styled, { css } from 'styled-components';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';

export const Nav = styled(animated.aside)<{ isMobile?: boolean }>`
  width: 100%;
  max-width: 240px;
  height: calc(100vh);
  position: fixed;
  z-index: 121;
  top: 0;
  left: 0;
  background: ${(props) => props.theme.palette.paper};
  display: ${(props) => (props.isMobile ? 'flex' : 'none')};
  flex-direction: column;

  @media (min-width: 576px) {
    width: 64px;
    height: calc(100vh - 64px);
    position: fixed;
    top: 64px;
    display: ${(props) => (!props.isMobile ? 'flex' : 'none')};
  }
`;

export const UserMenu = styled.div`
  height: 64px;
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  border-bottom: 1px solid ${(props) => props.theme.palette.border};

  > a {
    display: block;
    border: none;
    outline: none;
    border-radius: 100%;
    height: 44px;
    width: 44px;
    overflow: hidden;
    cursor: pointer;

    > img {
      height: 100%;
      width: 100%;
    }
  }

  > div {
    display: flex;
    justify-content: flex-end;
    flex: 1;
  }
  @media (min-width: 576px) {
    border: none;
    margin-bottom: 8px;
    justify-content: center;
    padding: 0px;
    width: 64px;
    div {
      display: none;
    }
  }
`;

export const Item = styled.li<{ position: string }>`
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
