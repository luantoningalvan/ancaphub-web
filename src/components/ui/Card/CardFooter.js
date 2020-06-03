import React from 'react';
import PropTypes from 'prop-types';
import { CardFooterContainer } from './styles';

const CardFooter = ({ link, action, label }) => (
  <CardFooterContainer to={link} onClick={action}>
    {label}
  </CardFooterContainer>
);

CardFooter.propTypes = {
  link: PropTypes.string,
  action: PropTypes.func,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

CardFooter.defaultProps = {
  link: '#',
  action: undefined,
  label: undefined,
};

export default CardFooter;
