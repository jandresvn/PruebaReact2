import React, { Component } from 'react';
import Moment from 'react-moment';
import NumberFormat from 'react-number-format';
import { NavLink } from "react-router-dom";

export default class Index extends Component {
    componentDidMount() {
        document.title = "AyM Store | Acerca de"

    }
    render() {
        return (

            <div class="content-wrapper">
                <section class="content-header">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1>Acerca De</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><NavLink to="/">Inicio</NavLink></li>
                                    <li class="breadcrumb-item active">Acerca De</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section class="content">
                    <div style={{ padding: '5%', backgroundColor: 'White' }}>
                        <div className="container">

                            <dl className="row">

                                <dt className="col-sm-3">Nombre del sistema:</dt>
                                <dd className="col-sm-9">
                                    <p>Sistema de Facturación VeMo </p>
                                </dd>

                                <dt className="col-sm-3">Nombre de la empresa:</dt>
                                <dd className="col-sm-9">
                                    <p>AyM Store</p>
                                </dd>

                                <dt className="col-sm-3">Descripción del proyecto:</dt>
                                <dd className="col-sm-9">
                                    Este sistema tiene como objetivo facilitar y agilizar tanto los procesos de inventarios de los diferentes productos que se ofrecen, solicitar nuevo inventario y además el proceso de ventas.
                                    Este sistema utilizando el lenguaje de PHP con framework de Laravel para el backend y JavaScript con framework de ReactJS para el frontend y utilizando un servidor de base de datos de MySQL.
                                </dd>

                                <dt className="col-sm-3">Elaborado por:</dt>
                                <dd className="col-sm-9">
                                    <p>José Andrés Vega Núñez</p>
                                    <p>Juan Pablo Morales Rodríguez </p>
                                </dd>

                                <dt className="col-sm-3">Versión:</dt>
                                <dd className="col-sm-9">
                                    <p>1.0</p>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}