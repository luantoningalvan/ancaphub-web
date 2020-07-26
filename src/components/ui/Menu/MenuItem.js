import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItemWrap } from './styles';

const MenuItem = ({ link, label, icon, current, nested, ...rest }) => (
  <MenuItemWrap current={current} nested={nested} {...rest}>
    <Link to={link}>
      {icon}
      <span>{label}</span>
    </Link>
  </MenuItemWrap>
);

export default MenuItem;
