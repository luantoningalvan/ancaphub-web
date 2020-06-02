import React from 'react'
import PropTypes, { element } from 'prop-types';
import { IconButtonContainer } from './styles'

const IconButton = ({icon, variant, size, ...rest}) => (
  <IconButtonContainer variant={variant} size={size} {...rest } >
    {icon}
  </IconButtonContainer>
)

IconButton.propTypes = {
  icon: PropTypes.checkPropTypes(element),
  variant: PropTypes.oneOf(['outlined', 'contained', 'filled']),
  size: PropTypes.oneOf(['small', 'normal']),
};

IconButton.defaultProps = {
  variant: 'filled',
  size: 'normal',
};

export default IconButton;
