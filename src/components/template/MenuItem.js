import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const StyledLink = styled(Link)`
  display: block;
  text-align: center;
  margin-right: 16px;
  padding: 8px 16px;
  border-radius: 0px 20px 20px 0px;

  background: ${(props) =>
    props.current ? props.theme.palette.secondary : 'transparent'};

  span {
    font-size: 17px;
    line-height: 20px;
    display: block;
  }
  i {
    margin-right: 16px;
    font-size: 20px;
    height: 20px;
    display: block;
  }

  color: ${(props) =>
    props.current
      ? props.theme.palette.text.contrast
      : props.theme.palette.text.secondary};

  &:hover {
    ${(props) => css`
      background: ${props.theme.palette.secondary};
      color: ${props.theme.palette.text.contrast};
    `}
  }

  @media (min-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 8px;
    padding: 8px 0px;
    border-radius: 4px;

    i {
      margin-right: 0px;
      font-size: 20px;
    }
    span {
      display: none;
    }
  }
`;

export const Item = styled.li`
  list-style: none;
  position: ${(props) => props.position};

  a {
    display: flex;
    align-items: center;
  }

  & + li {
    margin-top: 8px;
  }

  &:hover {
    ul {
      display: block;
    }
  }
`;

const MenuItem = ({ link, icon, current, label }) => (
  <Item>
    <StyledLink to={link} current={!!current}>
      <i>{icon}</i>
      <span>{label}</span>
    </StyledLink>
  </Item>
);

MenuItem.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.func])
    .isRequired,
  current: PropTypes.bool.isRequired,
};

export default MenuItem;
