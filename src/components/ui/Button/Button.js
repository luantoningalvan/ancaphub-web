import React from 'react';
import PropTypes from 'prop-types';
import { ButtonContainer } from './styles';

const Button = ({ children, ...rest }) => (
  <ButtonContainer {...rest}>{children}</ButtonContainer>
);

Button.propTypes = {
  variant: PropTypes.oneOf(['outlined', 'contained', 'filled']),
  size: PropTypes.oneOf(['small', 'normal']),
  fullWidth: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'filled',
  size: 'normal',
  fullWidth: false,
};

export default Button;
