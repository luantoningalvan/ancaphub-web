import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle<{
  collapsed?: boolean;
  theme?: any;
}>`
body { //@ts-ignore
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
`;
