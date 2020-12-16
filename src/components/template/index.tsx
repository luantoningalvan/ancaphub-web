import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ThemeProvider from './Provider';
import Header from './Header';
import Navigation from './Navigation';
import Main from './Main';

const Template: React.FC = ({ children }) => {
  const auth = useSelector((state: any) => state.auth);
  const [collapsed, setCollapsed] = useState(true);

  const handleCollapse = (value: boolean) => {
    setCollapsed(value || !collapsed);
  };

  return (
    <ThemeProvider collapsed={collapsed}>
      <Header
        user={auth.user}
        collapsed={collapsed}
        setCollapsed={handleCollapse}
      />
      <Navigation user={auth.user} />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Template;
