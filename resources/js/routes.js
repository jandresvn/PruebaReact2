import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import App from './components/App';
import Index from './components/Dashboard/Index';

//Inicio de sesion
import Login from './components/Auth/Login'

const validateRoute = (ruta, can) => {
    if (window.App.loggedIn) {
        if (can) {
            return (ruta)
        }
        else {
            return (<Redirect to="/" />)
        }
    }
    else {
        return (<Redirect to="/login" />)
    }
}

const AppRoutes = () =>
    <App>
        <Switch>

            <Route exact path="/login" render={() => window.App.loggedIn ? true ? <Redirect to="/" /> : '' : <Login />} />
            <Route exact path="/" render={() => validateRoute(<Index />, true)} />

        </Switch>
    </App>;


export default AppRoutes
