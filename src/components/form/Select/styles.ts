import styled, { css } from 'styled-components';
import { Tooltip } from 'snake-ui';

interface TextFieldContainerProps {
  isErrored?: boolean;
  isFocused?: boolean;
  isFilled?: boolean;
}

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;

  select {
    display: none;
  }
`;

export const SelectField = styled.div<TextFieldContainerProps>`
  background: transparent;
  border-radius: 8px;
  width: 100%;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.theme.palette.border};
  color: ${(props) => props.theme.palette.text.primary};
  position: relative;
  height: 56px;

  & + div {
    margin-top: 16px;
  }

  input {
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
    & + svg {
      margin: 0px;
    }
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
        top: 20px;
        line-height: 1.25;
        transform: scale(0.75) translateY(-11px);
      }
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: ${props.theme.palette.secondary};

      .input-label {
        top: 20px;
        line-height: 1.25;
        transform: scale(0.75) translateY(-11px);
      }
    `}
`;

export const SelectOptionList = styled.div`
  border-radius: 4px;
  min-width: 100px;
`;

export const SelectOption = styled.div`
  flex: 1;
  padding: 8px 16px;
  line-height: 1.25;
  font-size: 1rem;
  color: ${(props) => props.theme.palette.text.primary};
  border-radius: 4px;

  &:hover {
    background: rgba(0, 0, 0, 0.1);
  }
`;

SelectOption.defaultProps = {
  role: 'menuitemradio',
  'aria-checked': false,
  tabIndex: 0,
};

export const AddOptionButton = styled.button`
  width: 100%;
  background: transparent;
  border: none;
  border-top: 1px solid ${(props) => props.theme.palette.border};
  padding: 16px 0px;
  color: ${(props) => props.theme.palette.text.primary};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  svg {
    margin-right: 8px;
  }
  &:hover {
    background: rgba(0, 0, 0, 0.1);
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
