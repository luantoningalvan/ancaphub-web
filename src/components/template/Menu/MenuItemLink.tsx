import React from 'react';
import { Item, MenuItemLinkContainer } from './styles';

interface MenuItemLinkProps {
  link: string;
  icon: JSX.Element;
  current: boolean;
  label: string | JSX.Element;
}

const MenuItemLink: React.FC<MenuItemLinkProps> = ({
  link,
  icon,
  current,
  label,
}) => (
  <Item>
    <MenuItemLinkContainer to={link} current={!!current}>
      <i>{icon}</i>
      <span>{label}</span>
    </MenuItemLinkContainer>
  </Item>
);

export default MenuItemLink;
