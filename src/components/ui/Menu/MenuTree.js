/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { MenuItemWrap } from './styles';

const MenuItem = ({ children, label, icon, current, ...rest }) => {
  const [isOpen, setIsOpen] = useState(current);

  return (
    <MenuItemWrap current={current} {...rest}>
      <a onClick={() => setIsOpen(!isOpen)}>
        {icon}
        <span>{label}</span>
        {isOpen ? <FiChevronUp /> : <FiChevronDown />}
      </a>

      <div style={{ display: isOpen ? 'block' : 'none', marginLeft: 16 }}>
        {children}
      </div>
    </MenuItemWrap>
  );
};

export default MenuItem;
