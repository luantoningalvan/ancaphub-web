import React from 'react';

const Menu = ({ children, style }) => (
  <ul style={{ padding: '8px 0px', ...style }}>{children}</ul>
);

export default Menu;
