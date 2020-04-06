import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import axios from 'axios';

export default class Header extends Component {
    constructor() {
        super();
        this.state = {
            message: '',
            enviado: false
        }
        this.handleLogoutAction = this.handleLogoutAction.bind(this);
    }

    handleLogoutAction() {
        axios.post(window.App.appURL + 'api/logout').then(res =>
            window.location.replace(window.App.appURL + 'login')
        )
            .catch(error => {

                this.setState({

                    message: error.response.data.errors
                })

            })
    }

    render() {
        return (
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                    </li>
                </ul>


                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link" data-toggle="dropdown" href="#">
                            <i className="far fa-user"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span className="dropdown-item dropdown-header">Opciones</span>
                            <div className="dropdown-divider"></div>
                            <NavLink to="/usuario/editar_contrasena" className="dropdown-item">
                                <i className="fas fa-unlock mr-2"></i> Cambiar Contraseña
                            </NavLink>
                            <div className="dropdown-divider"></div>
                            <NavLink to="/acerca_de" className="dropdown-item">
                                <i className="fas fa-address-card mr-2"></i> Acerca de
                            </NavLink>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">
                                <i className="fas fa-book mr-2"></i> Manual de usuario
                            </a>
                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item text-danger" onClick={this.handleLogoutAction}>
                                <i className="fas fa-sign-out-alt mr-2"></i> Cerrar Sesión
                            </a>
                        </div>
                    </li>
                </ul>
            </nav>
        );
    }



}
