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
  transition: 0.2s;

  svg {
    height: 20px;
    width: 20px;
    margin-right: 16px;
  }

  a,
  span,
  svg {
    color: ${(props) => props.theme.palette.text.primary};
  }

  &:hover {
    a,
    span,
    svg {
      color: ${(props) => props.theme.palette.primary};
    }
  }
`;

interface DropdownListItemProps {
  icon: JSX.Element;
  action?: React.ReactElement;
  onClick?(e: any): void;
}

const DropdownListItem: React.FC<DropdownListItemProps> = ({
  children,
  icon,
  action,
  ...props
}) => (
  <DropdownListItemWrap {...props}>
    {icon}
    <span>{children}</span>
    {action && (
      <div>{React.cloneElement(action, { style: { margin: '0 0.5em' } })}</div>
    )}
  </DropdownListItemWrap>
);

export default DropdownListItem;
