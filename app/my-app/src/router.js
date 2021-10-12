import React from 'react'

import Game from './pages/games'
import Login from './pages/login'
import Player from './pages/players'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

const PrivateRouter = ({ component: Component, ...rest}) => (
    <div>
        <Route 
            {...rest} 
            render={ props => (
                <Component {...props} />   
            )} 
        />
    </div>
)

const Routes =  (props) => {

    return (
        <BrowserRouter>
            <Switch>
                <Route component={Game} path="/" exact/>
                <Route component={Login} path="/login" exact/>
                <PrivateRouter component={Player} nav={props.nav} path="/players" exact/>
                <Route path='*' component={Login} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;