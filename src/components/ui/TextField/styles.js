import styled, { css } from 'styled-components';
import { Tooltip } from '../Tooltip';

export const Container = styled.div`
  background: transparent;
  border-radius: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.palette.border};
  color: ${(props) => props.theme.palette.text.primary};
  padding: 0px 16px;
  & + div {
    margin-top: 16px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: red;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}

  input {
    flex: 1;
    padding: 16px 0px;

    background: transparent;
    border: none;
    color: ${(props) => props.theme.palette.text.primary};

    &::placeholder {
      color: ${(props) => props.theme.palette.text.secondary};
    }
  }

  svg {
    margin-right: 16px;
    & + svg { margin: 0px;}
  }
`;

export const Error = styled(Tooltip)`
  margin-left: 16px;
  svg {
    margin: 0px;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
