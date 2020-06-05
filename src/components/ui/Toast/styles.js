import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

const errorColors = {
  info: {
    background: '#ebf8ff',
    color: '#3171b7',
  },
  success: {
    background: '#ecfffa',
    color: '#2e656a',
  },
  error: {
    background: '#fddede',
    color: '#c53030',
  },
};

export const Container = styled(animated.div)`
  width: 360px;
  position: relative;
  padding: 16px 30px 16px 16px;
  border-radius: 10px;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  display: flex;

  ${(props) =>
    css`
      background: ${errorColors[props.type].background};
      color: ${errorColors[props.type].color};

      svg {
        fill: ${errorColors[props.type].color};
      }
    `}

  & + div {
    margin-top: 8px;
  }

  > svg {
    margin-right: 8px;
  }

  div {
    flex: 1;
  }

  p {
    margin-top: 4px;
    font-size: 14px;
    opacity: 0.9;
    line-height: 20px;
  }

  button {
    position: absolute;
    right: 16px;
    top: 16px;
    border: 0;
    background: transparent;
    color: inherit;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;
      svg {
        margin-top: 0px;
      }
    `}
`;
