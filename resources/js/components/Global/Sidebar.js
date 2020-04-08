import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mante_activo: false,
            show_mante: false,
            show_admin: false,
            admin_activo: false
        }
        this.onClickLinkMantenimientos = this.onClickLinkMantenimientos.bind(this);
        this.onClickLinkProcesos = this.onClickLinkProcesos.bind(this);
        this.onClickLinkAdmin = this.onClickLinkAdmin.bind(this);
    }

    componentWillMount() {
        let location = window.location.pathname;

        if (location.includes('/productos') || location.includes('/proveedores') || location.includes('/usuarios') ||
            location.includes('/roles') || location.includes('/cajas')) {
            this.setState({
                mante_activo: true,
            })
        }

        if (location.includes('/respaldos') || location.includes('/bitacora')) {
            this.setState({
                admin_activo: true,
            })
        }
        if (window.App.can_caja_index || window.App.can_producto_index ||
            window.App.can_proveedores_index || window.App.can_role_index || window.App.can_usuario_index) {
            this.setState({ show_mante: true })
        }

        if (window.App.can_base_datos_index || window.App.can_bitacora_index) {
            this.setState({ show_admin: true })
        }
    }

    onClickLinkMantenimientos(e) {

        this.setState({
            mante_activo: true,
            admin_activo: false
        })
    }

    onClickLinkProcesos(e) {
        this.setState({
            mante_activo: false,
            admin_activo: false
        })
    }

    onClickLinkAdmin(e) {
        this.setState({
            mante_activo: false,
            admin_activo: true
        })
    }

    render() {
        return (
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <a href="index3.html" className="brand-link">
                    <img src={window.location.origin + '/dist/img/AdminLTELogo.png'} alt="AdminLTE Logo" className="brand-image img-circle elevation-3"
                        style={{ opacity: + '.8' }} />
                    <span className="brand-text font-weight-light">AyM Store</span>
                </a>

                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={window.location.origin + '/dist/img/user2-160x160.jpg'} className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">{window.App.user.nombre + ' ' + window.App.user.apellidos}</a>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                            <li className="nav-item">
                                <NavLink to="/" className="nav-link" onClick={this.onClickLinkProcesos}>
                                    <i className="nav-icon fas fa-indent"></i>
                                    <p> Inicio</p>
                                </NavLink>
                            </li>

                            {window.App.can_inventario_index ? (
                                <li className="nav-item">
                                    <NavLink to="/inventario" className="nav-link" onClick={this.onClickLinkProcesos} >
                                        <i className="nav-icon fas fa-boxes"></i>
                                        <p>Inventario</p>
                                    </NavLink>
                                </li>) : ''}

                            {window.App.can_venta_nueva ? (
                                <li className="nav-item">
                                    <NavLink to="/venta" className="nav-link" onClick={this.onClickLinkProcesos} >
                                        <i className="nav-icon fas fa-shopping-cart"></i>
                                        <p>Venta</p>
                                    </NavLink>
                                </li>) : ''}

                            {window.App.can_devolucion_nueva ? (
                                <li className="nav-item">
                                    <NavLink to="/devolucion" className="nav-link" onClick={this.onClickLinkProcesos} >
                                        <i className="nav-icon fas fa-reply"></i>
                                        <p>Devolusión</p>
                                    </NavLink>
                                </li>) : ''}

                            {window.App.can_movimiento_caja ? (
                                <li className="nav-item">
                                    <NavLink to="/movimiento_caja/nuevo" className="nav-link" onClick={this.onClickLinkProcesos} >
                                        <i className="nav-icon fas fa-wallet"></i>
                                        <p>Movimiento de Caja</p>
                                    </NavLink>
                                </li>) : ''}

                            {window.App.can_pago_proveedor ? (
                                <li className="nav-item">
                                    <NavLink to="/pago_proveedor/nuevo" className="nav-link" onClick={this.onClickLinkProcesos} >
                                        <i className="nav-icon fas fa-money-check"></i>
                                        <p>Pago Proveedores</p>
                                    </NavLink>
                                </li>) : ''}

                            {window.App.can_cierre ? (
                                <li className="nav-item">
                                    <NavLink to="/cierre_caja" className="nav-link" onClick={this.onClickLinkProcesos} >
                                        <i className="nav-icon fas fa-closed-captioning"></i>
                                        <p>Cierre de Caja</p>
                                    </NavLink>
                                </li>) : ''}

                            {window.App.can_pedido_index ? (
                                <li className="nav-item">
                                    <NavLink to="/pedidos" className="nav-link" onClick={this.onClickLinkProcesos} >
                                        <i className="nav-icon fas fa-phone"></i>
                                        <p>Solicitud de Pedidos</p>
                                    </NavLink>
                                </li>) : ''}

                            {window.App.can_reportes_index ? (
                                <li className="nav-item">
                                    <NavLink to="/reportes" className="nav-link" onClick={this.onClickLinkProcesos} >
                                        <i className="nav-icon fas fa-chart-bar"></i>
                                        <p>Reportes</p>
                                    </NavLink>
                                </li>) : ''}

                            {this.state.show_mante ? (
                                <li className="nav-item has-treeview">
                                    <a href="#mantenimientos" className="nav-link" style={this.state.mante_activo ? { color: '#4d83ff' } : {}}>
                                        <i className="nav-icon fas fa-tools"></i>
                                        <p>
                                            Mantenientos
                                    <i className="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">
                                        {window.App.can_producto_index ? (
                                            <li className="nav-item">
                                                <NavLink to="/productos" className="nav-link" onClick={this.onClickLinkMantenimientos} >
                                                    <i className="nav-icon fas fa-tshirt"></i>
                                                    <p>Productos</p>
                                                </NavLink>
                                            </li>) : ''}

                                        {window.App.can_proveedores_index ? (
                                            <li className="nav-item">
                                                <NavLink to="/proveedores" className="nav-link" onClick={this.onClickLinkMantenimientos}>
                                                    <i className="nav-icon fas fa-truck"></i>
                                                    <p>Proveedores</p>
                                                </NavLink>
                                            </li>) : ''}

                                        {window.App.can_caja_index ? (
                                            <li className="nav-item">
                                                <NavLink to="/cajas" className="nav-link" onClick={this.onClickLinkMantenimientos} >
                                                    <i className="nav-icon fas fa-cash-register"></i>
                                                    <p>Cajas</p>
                                                </NavLink>
                                            </li>) : ''}

                                        {window.App.can_role_index ? (
                                            <li className="nav-item">
                                                <NavLink to="/roles" className="nav-link" onClick={this.onClickLinkMantenimientos}>
                                                    <i className="nav-icon fas fa-project-diagram"></i>
                                                    <p>Roles</p>
                                                </NavLink>
                                            </li>) : ''}

                                        {window.App.can_usuario_index ? (
                                            <li className="nav-item">
                                                <NavLink to="/usuarios" className="nav-link" onClick={this.onClickLinkMantenimientos} >
                                                    <i className="nav-icon fas fa-users"></i>
                                                    <p>Usuarios</p>
                                                </NavLink>
                                            </li>) : ''}
                                    </ul>
                                </li>) : ''
                            }

                            {this.state.show_mante ? (
                                <li className="nav-item has-treeview">
                                    <a href="#mantenimientos" className="nav-link" style={this.state.admin_activo ? { color: '#4d83ff' } : {}}>
                                        <i className="nav-icon fas fa-users-cog"></i>
                                        <p>
                                            Administrativo
                                    <i className="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul className="nav nav-treeview">

                                        {window.App.can_base_datos_index ? (
                                            <li className="nav-item">
                                                <NavLink to="/respaldos" className="nav-link" onClick={this.onClickLinkAdmin} >
                                                    <i className="nav-icon fas fa-database"></i>
                                                    <p>Respaldo Base de Datos</p>
                                                </NavLink>
                                            </li>) : ''}

                                        <li className="nav-item">
                                            <NavLink to="/bitacora" className="nav-link" onClick={this.onClickLinkAdmin} >
                                                <i className="nav-icon fas fa-calendar"></i>
                                                <p>Bitácora</p>
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>) : ''
                            }
                        </ul>
                    </nav>

                    <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
                        <div className="os-scrollbar-track">
                            <div className="os-scrollbar-handle" style={{ width: '100%', transform: 'translate(0px, 0px)' }}>
                            </div>
                        </div>
                    </div>
                    <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
                        <div className="os-scrollbar-track">
                            <div className="os-scrollbar-handle" style={{ height: '27.5835%', transform: 'translate(0px, 245.005px)' }}>
                            </div>
                        </div>
                    </div>
                    <div className="os-scrollbar-corner"></div>
                </div>
            </aside>
        );
    }

}
