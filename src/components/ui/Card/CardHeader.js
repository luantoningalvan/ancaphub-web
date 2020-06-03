import React from 'react';
import { CardHeaderContainer } from './styles';

const CardHeader = ({ customContent, title, icon: Icon, ...rest }) => (
  <CardHeaderContainer {...rest}>
    {customContent ? (
      { customContent }
    ) : (
      <>
        <h3>{title}</h3>
        {!!Icon && <Icon />}
      </>
    )}
  </CardHeaderContainer>
);

export default CardHeader;
