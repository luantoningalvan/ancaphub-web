import React from "react";
import { CardContainer } from "./styles";

const Card = ({ children, bordered, ...rest }) => (
  <CardContainer bordered={bordered} {...rest}>{children}</CardContainer>
);

export default Card;
