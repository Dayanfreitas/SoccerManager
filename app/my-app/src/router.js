import React from 'react';

import Menu from './componentes/Menu';

import Home from './pages/home';
import Game from './pages/games';
import Login from './pages/login';
import Player from './pages/players';

import UserForm from './pages/user/form';
import UserConfig from './pages/user/configuration';

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

const isAuthenticated = () => {
  const email = localStorage.getItem('X-User-Email') || '';
  const token = localStorage.getItem('X-User-Token') || '';

  return email && token;
};

const PrivateRouter = ({ component: Component, ...rest }) => (
  <div>
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? (
          <Component {...props} nav={Menu} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { form: props.location },
            }}
          />
        )
      }
    />
  </div>
);

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Login} path="/login" exact />
        <PrivateRouter component={Home} props path="/" exact />
        <PrivateRouter component={Game} props path="/games" exact />
        <PrivateRouter
          component={Player}
          props
          nav={props}
          path="/players"
          exact
        />
        {/* <PrivateRouter component={PlayerForm} nav={props.nav} path="/player/create" exact/> */}
        <PrivateRouter
          component={UserForm}
          nav={props}
          path="/user/create"
          exact
        />
        <PrivateRouter
          component={UserConfig}
          nav={props}
          path="/user/configuration"
          exact
        />
        {/* <Route path='*' component={Game} /> */}
      </Switch>
      {
        isAuthenticated() ? <Menu/> : <></>
      }
    </BrowserRouter>
  );
};

export default Routes;
