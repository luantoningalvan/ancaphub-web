import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ThemeProvider from './Provider';
import Header from './Header';
import Navigation from './Navigation';
import Main from './Main';

const Template: React.FC = ({ children }) => {
  const auth = useSelector((state: any) => state.auth);

  return (
    <ThemeProvider>
      <Header user={auth.user} />
      <Navigation user={auth.user} />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Template;
