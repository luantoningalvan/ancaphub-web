import React from 'react';
import styled from 'styled-components';
import ThemeProvider from '../components/template/Provider';
import { ReactComponent as Logo } from '../assets/ancaphub.svg';
import { Spinner } from '../components/ui';

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
      <Logo width={72} height={72} fill="#e0b30d" />
      <Spinner size={96} />
    </LoadScreenWrap>
  </ThemeProvider>
);

export default LoadScreen;
