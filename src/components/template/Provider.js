import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider, createGlobalStyle, css } from 'styled-components';

const themes = {
  dark: {
    palette: {
      primary: '#1141ad',
      secondary: '#e0b30d',
      background: '#161b28',
      alert: {
        info: '#0099cc',
        success: '#007e33',
        error: '#cc0000',
        warning: '#f80',
      },
      paper: '#21283b',
      paperDark: '#1d2333',
      border: '#2f3749',
      text: {
        primary: '#fff',
        secondary: '#ccc',
        contrast: '#fff',
      },
    },
  },
  light: {
    palette: {
      primary: '#1141ad',
      secondary: '#e0b30d',
      background: '#f5f5f5',
      alert: {
        info: '#33b5e5',
        success: '#00c851',
        error: '#f44',
        warning: '#fb3',
      },
      paper: '#fff',
      paperDark: '#fff',
      border: '#ececec',
      text: {
        primary: '#000',
        secondary: '#777',
        contrast: '#fff',
      },
    },
  },
};

const Template = ({ children, collapsed = true }) => {
  const { colorMode } = useSelector((state) => state.settings);

  const theme = themes[colorMode];

  const GlobalStyle = createGlobalStyle`
  body {
    background: ${theme.palette.background};
    color: ${theme.palette.text.primary};
  }

${
  !collapsed &&
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
  `
}

`;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div id="overlay" />
      {children}
    </ThemeProvider>
  );
};

export default Template;
