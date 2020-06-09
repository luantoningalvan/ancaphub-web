import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Template from '../components/template';

import routeList from './routeList';
import LoadScreen from '../pages/LoadingPage';

const Routes = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);

  return (
    <>
      {isAuthenticated !== null && !loading ? (
        <Router>
          <Switch>
            {routeList.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={(props) => {
                  if (!route.isOpen) {
                    if (!isAuthenticated) {
                      return <Redirect to="/" />;
                    }

                    return (
                      <Template {...props}>
                        <route.component {...props} />
                      </Template>
                    );
                  }

                  if (isAuthenticated) {
                    return <Redirect to="/home" />;
                  }

                  return <route.component {...props} />;
                }}
              />
            ))}
          </Switch>
        </Router>
      ) : (
        <LoadScreen />
      )}
    </>
  );
};

export default Routes;
