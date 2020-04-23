import React from 'react';
import { fakeAuth } from './fakeAuth'
import {
  Route,
  Redirect,
} from 'react-router-dom'

//private route wraps our routes and handels redirects
// eslint-disable-next-line react/prop-types
export const PrivateRoute = function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      //location is a object that represents the current url
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          //if we are authenticated render children aka quotes and rover photos
          children
        ) : (
          //if not redirect to relitave path /login
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}
