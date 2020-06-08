import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuItemWrap = styled.li`
  svg {
    color: ${(props) => props.theme.palette.text.primary};
    height: 24px;
    width: 24px;
    margin-right: 16px;
  }

  a {
    display: flex;
    align-items: center;
    padding: 16px;
    background: ${(props) =>
      props.current ? 'rgba(0,0,0,0.1)' : 'transparent'};
    transition: background 0.3s;
    cursor: pointer;
    color: ${(props) => props.theme.palette.text.primary};
    &:hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }
`;

const MenuItem = ({ link, label, icon, current, ...rest }) => (
  <MenuItemWrap current={current} {...rest}>
    <Link to={link}>
      {icon}
      <span>{label}</span>
    </Link>
  </MenuItemWrap>
);

export default MenuItem;
