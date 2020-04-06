import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import App from './components/App';
import Index from './components/Dashboard/Index';

//Inicio de sesion
import Login from './components/Auth/Login'

//Imports Usuarios
import UsuariosContrasena from './components/Usuarios/Change_Password'

//Acerca de
import AcercaDe from './components/Auth/AcercaDe'

//Imports Errores
import Error404 from './components/Global/Errors/Error404'

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


            {/* Usuarios */}
            <Route exact path="/usuario/editar_contrasena" render={() =>validateRoute(<UsuariosContrasena/>,true)}  />

            {/* Acerca de */}
            <Route exact path="/acerca_de" render={() => validateRoute(<AcercaDe />, true)} />

            {/* Error 404 */}
            <Route exact path="/*" component={Error404} />

        </Switch>
    </App>;


export default AppRoutes
