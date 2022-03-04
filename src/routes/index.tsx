import React, { memo } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useRoutes,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Template from "../components/template";

import { RoutesList } from "./routeList";
import LoadScreen from "../pages/loading";

const RenderRouter = memo((route: any) => {
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  console.log(route);

  if (!route.isOpen) {
    if (!isAuthenticated) {
      console.log("1");
      //return <Navigate to="/" replace />;
    }

    return (
      <Template>
        <route.component />
      </Template>
    );
  }

  if (isAuthenticated) {
    console.log("2");
    //return <Navigate to="/home" replace />;
  }

  return <route.component />;
});

const AppRoutes = () => {
  const { isAuthenticated, loading } = useSelector((state: any) => state.auth);

  return (
    <>
      {isAuthenticated !== null && !loading ? (
        <Router>
          {!!isAuthenticated ? (
            <Template>
              <RoutesList />
            </Template>
          ) : (
            <RoutesList />
          )}
        </Router>
      ) : (
        <LoadScreen />
      )}
    </>
  );
};

export default AppRoutes;
