import styled, { css } from 'styled-components';
import { Tooltip } from '../Tooltip';

export const TextFieldContainer = styled.div`
  background: transparent;
  border-radius: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.palette.border};
  color: ${(props) => props.theme.palette.text.primary};
  position: relative;

  & + div {
    margin-top: 16px;
  }


  input, textarea {
    flex: 1;
    padding: 26px 16px 10px 16px;

    line-height: 1.25;
    font-size: 1rem;
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

  .input-label {
    display: block;
    position: absolute;
    transform-origin: top left;
    transition-property: transform;
    white-space: nowrap;
    pointer-events: none;
    font-weight: normal;
    left: 16px;
    transition: transform 0.2s;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: ${props.theme.palette.secondary};
      border-color: ${props.theme.palette.secondary};

      .input-label {
        top: 18px;
        line-height: 1.25;
        transform: scale(0.75) translateY(-11px);
      }
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${props.theme.palette.secondary};

      .input-label {
        top: 18px;
        line-height: 1.25;
        transform: scale(0.75) translateY(-11px);
      }
    `}
`;

export const SelectContainer = styled(TextFieldContainer)`
  cursor: pointer;

  select {
    display: none;
  }

  svg {
    color: ${(props) => props.theme.palette.text.primary};
  }

  .selected-option {
    flex: 1;
    padding: 26px 16px 10px 16px;
    line-height: 1.25;
    font-size: 1rem;
    color: ${(props) => props.theme.palette.text.primary};
  }

  .select-options {
    position: absolute;
    border-radius: 4px;
    padding: 8px;
    min-width: 100px;
    top: 56px;
    left: 0;
    z-index: 100;

    ${(props) => css`
      border: 1px solid ${props.theme.palette.border};
      background: ${props.theme.palette.paper};
      color: ${props.theme.palette.text.primary};
    `}

    display: none;

    > div {
      padding: 8px;
      border-radius: 4px;

      &:hover {
        background: rgba(0, 0, 0, 0.1);
      }
    }
  }

  ${(props) =>
    props.isFocused &&
    css`
      .select-options {
        display: block;
      }

      > svg {
        display: none;
      }
    `}
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
