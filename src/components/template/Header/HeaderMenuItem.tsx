import React from "react";
import { useMatch } from "react-router-dom";
import { HeaderMenuItem as StyledHeaderMenuItem } from "./styles";

interface HeaderMenuItemProps {
  url: string;
  icon: React.ReactElement;
  onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
}

export const HeaderMenuItem = (props: HeaderMenuItemProps) => {
  const match = useMatch(props.url);

  return (
    <StyledHeaderMenuItem current={!!match} onClick={props.onClick}>
      {props.icon}
    </StyledHeaderMenuItem>
  );
};
