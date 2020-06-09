import React from 'react';
import PropTypes from 'prop-types';
import { Item, MenuItemButtonContainer } from './styles';

const MenuItemButton = ({ action, label, icon }) => (
  <Item>
    <MenuItemButtonContainer onClick={() => action()}>
      <i>{icon}</i>
      <span>{label}</span>
    </MenuItemButtonContainer>
  </Item>
);

MenuItemButton.propTypes = {
  action: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.func])
    .isRequired,
};

export default MenuItemButton;
