import { createGlobalStyle, css } from 'styled-components';

type Props = {
  collapsed?: boolean;
  theme?: any;
};

export const GlobalStyle = createGlobalStyle<Props>`
  body {
    background: ${(props) => props.theme.palette.background};
    color: ${(props) => props.theme.palette.text.primary};
  }

  ${(props) =>
    !props.collapsed &&
    css`
      body {
        overflow-y: hidden;
      }
      #overlay {
        height: 100vh;
        width: 100vw;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 120;
      }
    `}

  a {
    color: #0072d6;
    font-size: 0.8rem; 
  }
`;
