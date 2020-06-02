import React from 'react';
import PropTypes from 'prop-types';

export const Collapse = ({ expanded, children }) => {
  if (expanded) {
    return children;
  }
  return <></>;
};

Collapse.propTypes = {
  expanded: PropTypes.bool,
};

Collapse.defaultProps = {
  expanded: false,
};

export default Collapse;
