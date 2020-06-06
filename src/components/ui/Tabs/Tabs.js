import React from 'react';

const Tabs = ({ children, style }) => (
  <ul
    style={{
      display: 'flex',
      height: 48,
      padding: '0px 8px',
      width: '100%',
      ...style,
    }}
    className="tab-container"
  >
    {children}
  </ul>
);

export default Tabs;
