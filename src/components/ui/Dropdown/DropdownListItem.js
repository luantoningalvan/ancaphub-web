import React from 'react';
import styled from 'styled-components';

const DropdownListItemWrap = styled.li`
  display: flex;
  align-items: flex-start;
  list-style: none;
  align-items: center;
  min-width: 100px;
  max-width: 400px;
  padding: 8px 16px;
  cursor: pointer;

  svg {
    height: 20px;
    width: 20px;
  }

  &:hover {
    a,
    span,
    svg {
      color: ${(props) => props.theme.palette.primary};
    }
  }

  span,
  span a {
    transition: color 300ms ease-in-out;
  }

  span {
    color: ${(props) => props.theme.palette.text.primary};
    margin-left: 16px;
  }

  span a {
    color: ${(props) => props.theme.palette.text.primary};
    text-decoration: none;
  }
`;

const DropdownListItem = ({ children, icon, action, ...props }) => (
  <DropdownListItemWrap {...props}>
    {icon}
    <span>{children}</span>
    {action && (
      <div>{React.cloneElement(action, { style: { margin: '0 0.5em' } })}</div>
    )}
  </DropdownListItemWrap>
);

export default DropdownListItem;
