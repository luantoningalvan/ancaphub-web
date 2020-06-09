import React from 'react';
import PropTypes from 'prop-types';
import { Item, MenuItemLinkContainer } from './styles';

const MenuItemLink = ({ link, icon, current, label }) => (
  <Item>
    <MenuItemLinkContainer to={link} current={!!current}>
      <i>{icon}</i>
      <span>{label}</span>
    </MenuItemLinkContainer>
  </Item>
);

MenuItemLink.propTypes = {
  link: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.func])
    .isRequired,
  current: PropTypes.bool.isRequired,
};

export default MenuItemLink;
