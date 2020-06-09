import React from 'react';
import { CardBodyContainer } from './styles';

const CardBody = ({ children, ...rest }) => (
  <CardBodyContainer {...rest}>{children}</CardBodyContainer>
);

export default CardBody;
