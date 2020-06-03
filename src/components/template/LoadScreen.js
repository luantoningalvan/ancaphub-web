import React from 'react';
import styled from 'styled-components';
import ThemeProvider from './Provider';
import logo from '../../assets/logo-type.png';
import { Spinner } from '../ui';

const LoadScreenWrap = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    width: 150px;
  }

  span {
    margin-top: 16px;
  }
`;

const LoadScreen = () => (
  <ThemeProvider>
    <LoadScreenWrap>
      <img src={logo} alt="AncapHub Logo" />
      <Spinner size={96} />
    </LoadScreenWrap>
  </ThemeProvider>
);

export default LoadScreen;
