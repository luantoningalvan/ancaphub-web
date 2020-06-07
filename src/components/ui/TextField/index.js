import React from 'react';
// import PropTypes from 'prop-types';
import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './styles';

const TextField = ({
  placeholder,
  fullWidth,
  isFocused,
  isFilled,
  icon: Icon,
  error,
  ...rest
}) => {
  return (
    <Container
      fullWidth={fullWidth}
      isFocused={isFocused}
      isFilled={isFilled}
      isErrored={!!error}
    >
      {Icon && <Icon size={20} />}
      <input type="text" placeholder={placeholder} {...rest} />
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size="20px" />
        </Error>
      )}
    </Container>
  );
};

/* TextField.propTypes = {
  fullWidth: PropTypes.bool,
}; */

export { TextField };
