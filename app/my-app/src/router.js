import React from 'react'

import Game from './pages/games'
import Login from './pages/login'
import Player from './pages/players'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

const isAuthenticated = () => {

    const email = localStorage.getItem('X-User-Email') || ''
    const token = localStorage.getItem('X-User-Token') || ''

    return email && token
}

const PrivateRouter = ({ component: Component, ...rest}) => (
    <div>
       <Route 
            {...rest} 
            render={ props => (
                isAuthenticated() ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{pathname: '/login', state: {form: props.location} }} />
                )
            )} 
        />
    </div>
)

const Routes =  (props) => {

    return (
        <BrowserRouter>
            <Switch>
                <Route component={Login} path="/login" exact/>
                <PrivateRouter component={Game} path="/games" exact/>
                <PrivateRouter component={Player} nav={props.nav} path="/players" exact/>
                {/* <Route path='*' component={Game} /> */}
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;