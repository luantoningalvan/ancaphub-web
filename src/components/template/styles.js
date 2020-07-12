import styled, { css, createGlobalStyle } from 'styled-components';
import { animated } from 'react-spring';
import { Link } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${(props) => props.theme.palette.background};
    color: ${(props) => props.theme.palette.text.primary};
  }

  ${(props) =>
    !props.collapsed &&
    css`
      body {
        overflow-y: hidden;
      }
      #overlay {
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 120;
      }
    `}
`;

export const Nav = styled(animated.aside)`
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

export const SearchContainer = styled.div`
  i,
  svg {
    width: 20px;
    height: 20px;
    color: ${(props) => props.theme.palette.text.contrast};
  }

  .not-collapsed {
    height: 64px;
    width: 100%;
    padding: 0px 16px;
    background: ${(props) => props.theme.palette.paper};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    color: ${(props) => props.theme.palette.text.contrast};

    > input {
      border: none;
      background: transparent;
      padding: 16px;
      outline: none;
      flex: 1;
      color: ${(props) => props.theme.palette.text.contrast};

      &::placeholder {
        color: ${(props) => props.theme.palette.text.contrast};
        font-size: 16px;
        font-family: Ubuntu;
      }
    }
  }

  .mobile-search {
    color: ${(props) => props.theme.palette.text.contrast};

    > button {
      border: none;
      border-radius: 8px;
      padding: 8px;
      outline: none;
      background: transparent;
      cursor: pointer;
      width: auto;

      &:hover {
        background: rgba(0, 0, 0, 0.15);
      }
    }

    > a {
      padding: 8px;
      color: ${(props) => props.theme.palette.text.contrast};
    }
  }

  .desktop-search {
    display: none;
  }

  @media (min-width: 576px) {
    .mobile-search {
      display: none;
    }
    .desktop-search {
      display: block;
      background: rgba(0, 0, 0, 0.15);
      width: 360px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding: 8px;
      color: ${(props) => props.theme.palette.text.contrast};

      input {
        flex: 1;
        padding: 8px;
        border: none;
        background: transparent;
      }

      a,
      input,
      input::placeholder {
        color: ${(props) => props.theme.palette.text.contrast};
        font-size: 1rem;
      }
    }
  }
`;

export const Item = styled.li`
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

export const MenuItemLinkContainer = styled(Link)`
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
    props.current
      ? props.theme.palette.text.contrast
      : props.theme.palette.text.secondary};

  &:hover {
    ${(props) => css`
      background: ${props.theme.palette.secondary};
      color: ${props.theme.palette.text.contrast};
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

  color: ${(props) => props.theme.palette.text.secondary};

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

export const MainContainer = styled.main`
  width: 100%;
  @media (min-width: 576px) {
    width: calc(100% - 64px);
    margin-left: 64px;
  }
`;

export const AppBar = styled.header`
  background: ${(props) => props.theme.palette.secondary};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 64px;
`;

export const Logo = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  .logo {
    display: flex;
    justify-content: flex-start;
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    svg {
      transition: fill 200ms ease-in-out;
      margin: 8px;
      height: 56px;
      width: 56px;
    }
  }

  .collapse-button {
    background: transparent;
    border: none;
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-left: 16px;

    &:hover {
      background: rgba(0, 0, 0, 0.2);
    }
    border-radius: 100%;
    svg {
      height: 24px;
      width: 24px;
      color: ${(props) => props.theme.palette.text.contrast};
    }
  }

  @media (min-width: 576px) {
    .collapse-button {
      display: none;
    }
    flex: 0;
  }
`;

export const HeaderMenu = styled.ul`
  display: flex;
  margin-right: 25px;
`;

export const HeaderMenuItem = styled.li`
  list-style: none;
  margin-right: 5px;
  cursor: pointer;
  color: ${(props) => props.theme.palette.text.contrast};

  &:last-child {
    margin-right: 0px;
  }

  > a,
  > div {
    display: block;
    position: relative;
    margin-left: 8px;
    padding: 8px;
    border-radius: 8px;
    background: ${(props) =>
      props.current ? 'rgba(0,0,0,0.15)' : 'transparent'};
    transition: background 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: rgba(0, 0, 0, 0.15);
    }
  }

  svg {
    width: 20px;
    height: 20px;
  }

  .badge {
    position: absolute;
    height: 8px;
    width: 8px;
    top: 8px;
    right: 8px;
    border-radius: 4px;
    background: red;
  }
`;
