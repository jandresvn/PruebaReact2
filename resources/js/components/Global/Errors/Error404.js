import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Error404 extends Component {


    render() {
        return (
            <div class="content-wrapper">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1>404 Página de Error</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><NavLink to="/">Inicio</NavLink></li>
                                    <li class="breadcrumb-item active">404 Página de Error</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="content">
                    <div class="error-page">
                        <h2 class="headline text-warning"> 404</h2>

                        <div class="error-content">
                            <h3><i class="fas fa-exclamation-triangle text-warning"></i> Oops! Página no encontrada.</h3>

                            <p>
                                No pudimos encontrar la página que estaba buscando.
                                Mientras tanto, puede <NavLink to="/">volver al inicio.</NavLink>
                            </p>

                        </div>
                    </div>
                </section>
            </div>
        )
    }
}