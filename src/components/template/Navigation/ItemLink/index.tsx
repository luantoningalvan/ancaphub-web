import React from 'react';
import { Item, ItemLinkContainer } from './styles';

interface ItemLinkProps {
  link: string;
  icon: JSX.Element;
  current: boolean;
  label: string | JSX.Element;
}

const ItemLink: React.FC<ItemLinkProps> = ({ link, icon, current, label }) => (
  <Item>
    <ItemLinkContainer to={link} current={!!current}>
      <i>{icon}</i>
      <span>{label}</span>
    </ItemLinkContainer>
  </Item>
);

export default ItemLink;
