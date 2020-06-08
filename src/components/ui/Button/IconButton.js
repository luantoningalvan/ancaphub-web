import React, { forwardRef } from 'react';
import PropTypes, { element } from 'prop-types';
import { IconButtonContainer } from './styles';

const IconButton = forwardRef(({ variant, size, icon, ...rest }, ref) => (
  <IconButtonContainer variant={variant} size={size} {...rest} ref={ref}>
    {icon}
  </IconButtonContainer>
));

IconButton.displayName = 'IconButton';

IconButton.propTypes = {
  // eslint-disable-next-line react/require-default-props
  icon: PropTypes.checkPropTypes(element),
  variant: PropTypes.oneOf(['outlined', 'contained', 'filled']),
  size: PropTypes.oneOf(['small', 'normal']),
};

IconButton.defaultProps = {
  variant: 'filled',
  size: 'normal',
};

export default IconButton;
