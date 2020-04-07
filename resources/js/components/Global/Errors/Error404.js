import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Error404 extends Component {


    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>404 Página de Error</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><NavLink to="/">Inicio</NavLink></li>
                                    <li className="breadcrumb-item active">404 Página de Error</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="error-page">
                        <h2 className="headline text-warning"> 404</h2>

                        <div className="error-content">
                            <h3><i className="fas fa-exclamation-triangle text-warning"></i> Oops! Página no encontrada.</h3>

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
