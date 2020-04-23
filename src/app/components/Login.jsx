import React from 'react'
import{
  useHistory,
  useLocation
} from 'react-router-dom'
import {fakeAuth} from './services/fakeAuth'

export const Login = function LoginPage() {
  let history = useHistory();
  let location = useLocation();

  //we set from equal to the route we are trying to reach
  let { from } = location.state || { from: { pathname: "/" } };
  //login is a function that sets fake auth to true then redirects us
  let login = () => {
    fakeAuth.authenticate(() => {
      //so we auth then replace our current location to the previous route we tryed to reach
      history.replace(from);
    });
  };

  return (
    <div id='loginPage' className='rounded-top'>
      <p>You must log in to view the page at {from.pathname}</p>
      <button type='button' className='btn btn-primary' onClick={login}>Log in</button>
    </div>
  );
}

