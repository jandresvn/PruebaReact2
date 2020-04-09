import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import App from './components/App';
import Index from './components/Dashboard/Index';

//Inicio de sesion
import Login from './components/Auth/Login'

//Imports Usuarios
import Usuarios from './components/Usuarios/Index'
import UsuariosAdd from './components/Usuarios/Add'
import UsuariosEdit from './components/Usuarios/Edit'
import UsuariosContrasena from './components/Usuarios/Change_Password'

//Imports Roles
import Roles from './components/Roles/Index'
import RoleAdd from './components/Roles/Add'
import RolesEdit from './components/Roles/Edit'

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
            <Route exact path="/usuarios" render={() => validateRoute(<Usuarios />, window.App.can_usuario_index)} />
            <Route exact path="/usuarios/nuevo" render={() => validateRoute(<UsuariosAdd />, window.App.can_usuario_create)} />
            <Route exact path="/usuarios/editar/:id" render={(props) => validateRoute(<UsuariosEdit {...props} />, window.App.can_usuario_edit)} />
            <Route exact path="/usuario/editar_contrasena" render={() => validateRoute(<UsuariosContrasena />, true)} />

            {/* Roles */}
            <Route exact path="/roles" render={() => validateRoute(<Roles />, window.App.can_role_index)} />
            <Route exact path="/roles/nuevo" render={() => validateRoute(<RoleAdd />, window.App.can_role_create)} />
            <Route exact path="/roles/editar/:id" render={(props) => validateRoute(<RolesEdit {...props} />, window.App.can_role_edit_permisos)} />

            {/* Acerca de */}
            <Route exact path="/acerca_de" render={() => validateRoute(<AcercaDe />, true)} />

            {/* Error 404 */}
            <Route exact path="/*" component={Error404} />

        </Switch>
    </App>;


export default AppRoutes
