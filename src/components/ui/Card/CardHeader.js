import React from 'react';
import { CardHeaderContainer } from './styles';
import { Button, IconButton } from '../Button';

const CardHeader = ({ customContent, title, actions, ...rest }) => (
  <CardHeaderContainer {...rest}>
    {customContent ? (
      { customContent }
    ) : (
      <>
        <h3>{title}</h3>
        {!!actions && (
          <div className="actions">
            {actions.map(
              (action) =>
                action.show && (
                  <>
                    {action.type === 'icon' ? (
                      <IconButton
                        onClick={() => action.action()}
                        icon={action.label}
                      />
                    ) : (
                      <Button onClick={() => action.action()} color="secondary">
                        {action.label}
                      </Button>
                    )}
                  </>
                )
            )}
          </div>
        )}
      </>
    )}
  </CardHeaderContainer>
);

export default CardHeader;
