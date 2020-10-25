import React from 'react';
import ThemeProvider from '../../components/template/Provider';
import { ReactComponent as Logo } from '../../assets/ancaphub.svg';
import { CircularLoader } from 'snake-ui';
import { LoadScreenWrap } from './styles';

const LoadScreen = () => (
  <ThemeProvider>
    <LoadScreenWrap>
      <Logo width={72} height={72} fill="#e0b30d" />
      <CircularLoader size={96} />
    </LoadScreenWrap>
  </ThemeProvider>
);

export default LoadScreen;
