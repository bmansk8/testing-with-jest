import React from "react";
import { QuoteMachine } from "./QuoteMachine";
import { NASARover } from "./NASARover";
import { HomePage } from './HomePage';
import {Login} from './Login';
import {PrivateRoute} from './services/PrivateRoute'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export const App = function App() {

  return (

    <Router>
      <div>

        <nav className='navbar navbar-expand-lg navbar-light bg-light fixed-top'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link className='nav-link' to="/"> Home Page </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/quotes"> Quotes </Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <PrivateRoute path="/quotes">
            <QuoteMachine />
            <NASARover />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>

      </div>

    </Router>

  );
}

