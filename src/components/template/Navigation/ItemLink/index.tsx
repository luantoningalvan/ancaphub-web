import React from "react";
import { useMatch } from "react-router-dom";
import { Item, ItemLinkContainer } from "./styles";

interface ItemLinkProps {
  link: string;
  icon: JSX.Element;
  url: string;
  label: string | JSX.Element;
}

const ItemLink: React.FC<ItemLinkProps> = ({ link, icon, label, url }) => {
  const match = useMatch(url);

  return (
    <Item>
      <ItemLinkContainer to={link} current={!!match}>
        <i>{icon}</i>
        <span>{label}</span>
      </ItemLinkContainer>
    </Item>
  );
};

export default ItemLink;
