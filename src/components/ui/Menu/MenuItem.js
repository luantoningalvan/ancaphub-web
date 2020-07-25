import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItemWrap } from './styles';

const MenuItem = ({ link, label, icon, current, ...rest }) => (
  <MenuItemWrap current={current} {...rest}>
    <Link to={link}>
      {icon}
      <span>{label}</span>
    </Link>
  </MenuItemWrap>
);

export default MenuItem;
