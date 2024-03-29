import React from "react";

import Feed from "../pages/feed";
import SignIn from "../pages/signin";
import SignUp from "../pages/signup";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";

import Library from "../pages/library";
import Contribute from "../pages/library/contributions/SendNewContribution";
import SingeBook from "../pages/library/books/SingleBook";
import SingleArticle from "../pages/library/articles/SingleArticle";
import SingleVideo from "../pages/library/videos/SingleVideo";

import Authors from "../pages/authors";
import SingleAuthor from "../pages/authors/Single";

import Groups from "../pages/groups";
import SingleGroup from "../pages/groups/Single";

import Users from "../pages/users";

import Events from "../pages/events";
import SingleEvent from "../pages/events/SingleEvent";

import Projects from "../pages/projects";
import SingleProject from "../pages/projects/Single";
import SingleProjectPost from "../pages/projects/Post";
import NewProject from "../pages/projects/NewProject";
import ManageProject from "../pages/projects/Manage";

import Profile from "../pages/profiles";
import Notifications from "../pages/notifications";

import Messages from "../pages/messages";

import Contributions from "../pages/account/Contributions";
import Bookmarks from "../pages/account/Bookmarks";
import Settings from "../pages/account/settings";

import SearchData from "../pages/search/SearchData";
import NearbyUsers from "../pages/search/SearchNearbyUsers";
import { Navigate, useRoutes } from "react-router-dom";
import { useSelector } from "react-redux";

export const RoutesList = () => {
  const { isAuthenticated } = useSelector((state: any) => state.auth);

  const allRoutes = useRoutes(
    isAuthenticated
      ? [
          {
            path: "/",
            element: <Navigate to="/home" />,
          },
          {
            path: "/home",
            element: <Feed />,
          },
          {
            path: "/library",
            element: <Library />,
          },
          {
            path: "/library/contribute",
            element: <Contribute />,
          },
          {
            path: "/library/books/:id",
            element: <SingeBook />,
          },
          {
            path: "/library/articles/:id",
            element: <SingleArticle />,
          },
          {
            path: "/library/videos/:id",
            element: <SingleVideo />,
          },
          {
            path: "/library/:type",
            element: <Library />,
          },
          {
            path: "/groups",
            element: <Groups />,
          },
          {
            path: "/groups/:id",
            element: <SingleGroup />,
          },
          {
            path: "/groups/:id/:page",
            element: <SingleGroup />,
          },
          {
            path: "/users",
            element: <Users />,
          },
          {
            path: "/events",
            element: <Events />,
          },
          {
            path: "/events/:id",
            element: <SingleEvent />,
          },
          {
            path: "projects",
            element: <Projects />,
          },
          {
            path: "/projects/:projectId",
            element: <SingleProject />,
          },
          {
            path: "/projects/:projectId/:page",
            element: <SingleProject />,
          },
          {
            path: "/projects/new",
            element: <NewProject />,
          },
          {
            path: "/projects/:projectId/manage",
            element: <ManageProject />,
          },
          {
            path: "/projects/:projectId/manage/:page",
            element: <ManageProject />,
          },
          {
            path: "/projects/:projectId/manage/:page/:subpage",
            element: <ManageProject />,
          },
          {
            path: "/projects/:projectId/posts/:postId",
            element: <SingleProjectPost />,
          },
          {
            path: "/contributions",
            element: <Contributions />,
          },
          {
            path: "/authors",
            element: <Authors />,
            children: [
              {
                path: ":id",
                element: <SingleAuthor />,
              },
            ],
          },
          {
            path: "/bookmarks",
            element: <Bookmarks />,
          },
          {
            path: "/settings",
            element: <Settings />,
          },
          {
            path: "/notifications",
            element: <Notifications />,
          },
          {
            path: "/messages",
            element: <Messages />,
          },
          {
            path: "/messages/:id?",
            element: <Messages />,
          },
          {
            path: "/search",
            element: <SearchData />,
          },
          {
            path: "/nearby",
            element: <NearbyUsers />,
          },
          {
            path: "/:handle",
            element: <Profile />,
          },
          {
            path: "/:handle/:page",
            element: <Profile />,
          },
          {
            path: "*",
            element: <Navigate to="/" />,
          },
        ]
      : [
          {
            path: "/",
            element: <SignIn />,
          },
          {
            path: "/signup",
            element: <SignUp />,
          },
          {
            path: "/auth/forgot",
            element: <ForgotPassword />,
          },
          {
            path: "/auth/reset/:token",
            element: <ResetPassword />,
          },
        ]
  );

  return allRoutes;
};
