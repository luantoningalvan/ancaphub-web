import React from 'react';

const Tabs = ({ children, style }) => (
  <ul
    style={{
      display: 'flex',
      width: '100%',
      overflowX: 'scroll',
      ...style,
    }}
  >
    {children}
  </ul>
);

export default Tabs;
