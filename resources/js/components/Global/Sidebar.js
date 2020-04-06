import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="index3.html" className="brand-link">
                    <img src="../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                        style={{opacity: + '.8'}} />
                    <span className="brand-text font-weight-light">AyM Store</span>
                </a>

                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">{window.App.user.name}</a>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                            <li className="nav-item has-treeview menu-open">
                                <a href="#" className="nav-link active">
                                    <i className="nav-icon fas fa-indent"></i>
                                    <p> Inicio</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/widgets.html" className="nav-link">
                                    <i className="nav-icon fas fa-boxes"></i>
                                    <p>Inventario</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/widgets.html" className="nav-link">
                                    <i className="nav-icon fas fa-shopping-cart"></i>
                                    <p>Venta</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/widgets.html" className="nav-link">
                                    <i className="nav-icon fas fa-reply"></i>
                                    <p>Devolusión</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/widgets.html" className="nav-link">
                                    <i className="nav-icon fas fa-wallet"></i>
                                    <p>Movimiento de Caja</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/widgets.html" className="nav-link">
                                    <i className="nav-icon fas fa-money-check"></i>
                                    <p>Pago Proveedores</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/widgets.html" className="nav-link">
                                    <i className="nav-icon fas fa-closed-captioning"></i>
                                    <p>Cierre de Caja</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/widgets.html" className="nav-link">
                                    <i className="nav-icon fas fa-phone"></i>
                                    <p>Solicitud de Pedidos</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/widgets.html" className="nav-link">
                                    <i className="nav-icon fas fa-chart-bar"></i>
                                    <p>Reportes</p>
                                </a>
                            </li>
                            <li className="nav-header">Mantenimientos</li>
                            <li className="nav-item">
                                <a href="pages/calendar.html" className="nav-link">
                                    <i className="nav-icon fas fa-tshirt"></i>
                                    <p>Productos</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/calendar.html" className="nav-link">
                                    <i className="nav-icon fas fa-truck"></i>
                                    <p>Proveedores</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/calendar.html" className="nav-link">
                                    <i className="nav-icon fas fa-cash-register"></i>
                                    <p>Cajas</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/calendar.html" className="nav-link">
                                    <i className="nav-icon fas fa-project-diagram"></i>
                                    <p>Roles</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/calendar.html" className="nav-link">
                                    <i className="nav-icon fas fa-users"></i>
                                    <p>Usuarios</p>
                                </a>
                            </li>

                            <li className="nav-header">Administrativo</li>
                            <li className="nav-item">
                                <a href="pages/calendar.html" className="nav-link">
                                    <i className="nav-icon fas fa-database"></i>
                                    <p>Respaldo Base de Datos</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="pages/calendar.html" className="nav-link">
                                    <i className="nav-icon fas fa-calendar"></i>
                                    <p>Bitácora</p>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
                        <div className="os-scrollbar-track">
                            <div className="os-scrollbar-handle" style={{width: '100%', transform:  'translate(0px, 0px)'}}>
                            </div>
                        </div>
                    </div>
                    <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
                        <div className="os-scrollbar-track">
                            <div className="os-scrollbar-handle" style={{height: '27.5835%', transform: 'translate(0px, 245.005px)'}}>
                                </div>
                            </div>
                        </div>
                    <div className="os-scrollbar-corner"></div>
                </div>

            </aside>
        );
    }

}
