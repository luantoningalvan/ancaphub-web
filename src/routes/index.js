import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Template from '../components/template';

import routeList from './routeList';
import LoadScreen from '../components/template/LoadScreen';

const Routes = () => {
  const { isAuthenticated, loading } = useSelector((state) => state.auth);
  const history = useHistory();
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
                    if (!isAuthenticated) history.push('/');

                    return (
                      <Template {...props}>
                        <route.component {...props} />
                      </Template>
                    );
                  }
                  if (isAuthenticated) history.push('/home');

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
