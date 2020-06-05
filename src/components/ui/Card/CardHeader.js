import React from 'react';
import { CardHeaderContainer } from './styles';
import { Button } from '../Button';

const CardHeader = ({ customContent, title, action, ...rest }) => (
  <CardHeaderContainer {...rest}>
    {customContent ? (
      { customContent }
    ) : (
      <>
        <h3>{title}</h3>
        {!!action && action.show && (
          <Button onClick={() => action.action()} color="secondary">
            {action.label}
          </Button>
        )}
      </>
    )}
  </CardHeaderContainer>
);

export default CardHeader;
