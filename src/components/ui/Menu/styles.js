import styled, { css } from 'styled-components';

export const MenuItemWrap = styled.li`
  svg {
    color: ${(props) => props.theme.palette.text.primary};
    height: 24px;
    width: 24px;
    margin-right: 16px;
  }

  span {
    flex: 1;
  }

  > a {
    display: flex;
    align-items: center;
    padding: 16px;
    background: ${(props) =>
      props.current && !props.nested ? 'rgba(0,0,0,0.1)' : 'transparent'};
    transition: background 0.3s;
    cursor: pointer;
    color: ${(props) =>
      props.nested && props.current
        ? props.theme.palette.primary
        : props.theme.palette.text.primary};
    &:hover {
      ${(props) =>
        !props.nested
          ? css`
              background: rgba(0, 0, 0, 0.1);
            `
          : css`
              color: ${props.theme.palette.primary};
            `};
    }
  }
`;
