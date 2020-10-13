import React from 'react';
import { Item, MenuItemButtonContainer } from './styles';

interface MenuItemButtonProps {
  action?(): void;
  label: string | JSX.Element;
  icon: JSX.Element;
}

const MenuItemButton: React.FC<MenuItemButtonProps> = ({
  action = () => {},
  label,
  icon,
}) => (
  <Item>
    <MenuItemButtonContainer onClick={() => action()}>
      <i>{icon}</i>
      <span>{label}</span>
    </MenuItemButtonContainer>
  </Item>
);

export default MenuItemButton;
