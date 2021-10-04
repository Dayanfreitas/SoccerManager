import React, { Component } from 'react'
import {Route, BrowserRouter} from 'react-router-dom'

// import Home from "./pages/Home";
// import CreatePoint from "./pages/CreatePoint";
import Game from './pages/games'
import Login from './pages/login'

const Routes =  () => {
    return (
        <BrowserRouter>
            <Route component={Game} path="/" exact/>
            <Route component={Login} path="/login" exact/>
            {/* <Route component={CreatePoint} path="/games" exact/> */}
        </BrowserRouter>
    );
}

export default Routes;