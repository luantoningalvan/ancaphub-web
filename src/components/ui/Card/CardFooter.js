import React from 'react';
import { CardFooterContainer } from './styles';
import PropTypes from 'prop-types';

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
