import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Redirect, Link } from "react-router-dom";
import Charge from '../Global/Charge'
import Pagination from 'react-js-pagination';
import Loader from '../Global/Loader';

export default class Index extends Component {
    _isMounted = false;
    constructor() {
        super();
        this.state = {
            usuarios: [],
            readyToRedirect: false,
            redirect: false,
            ready: false,
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 1,
            pageRangeDisplayed: 5,
            orderBy: 'asc',
            orderByColumn: 'nombre',
            loader: true


        }
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleSortingChange = this.handleSortingChange.bind(this);

    }


    componentDidMount() {
        this._isMounted = true;
        document.title = "AyM Store | Usuarios"
        axios.get(window.App.appURL + `api/usuarios/?column=${this.state.orderByColumn}&order=${this.state.orderBy}`).then(response => {
            if (this._isMounted) {
                this.setState({
                    usuarios: response.data.data,
                    ready: true,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    activePage: response.data.current_page,
                    loader: false

                })
            }


        }).catch(error => {
            this.setState({ loader: false })
            if (typeof error.response !== 'undefined' && typeof error.response.status !== 'undefined') {
                this.errores(error)
            }
            else {
                console.log(error)
            }
        })

    }

    errores(error) {
        switch (error.response.status) {

            case 422:
                this.setState({
                    message: error.response.data.errors
                })
                break;

            case 403:
                this.setState({
                    readyToRedirect: true,
                })
                break;

            case 401:
                window.location.replace(window.App.appURL + 'login')
                break;

            case 409:
                this.setState({
                    error409: true
                })
                break;

            default:
                console.log(error)
                break;
        }
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handlePageChange(pageNumber) {
        axios.get(window.App.appURL + `/api/usuarios?page=${pageNumber}&column=${this.state.orderByColumn}&order=${this.state.orderBy}`).then(response => {
            this.setState({
                usuarios: response.data.data,
                itemsCountPerPage: response.data.per_page,
                totalItemsCount: response.data.total,
                activePage: response.data.current_page

            })
        }).catch(error => {
            if (typeof error.response !== 'undefined' && typeof error.response.status !== 'undefined') {
                this.errores(error)
            }
            else {
                console.log(error)
            }
        })
    }

    handleSortingChange(e) {
        e.preventDefault();
        let order = this.state.orderBy
        this.setState({
            orderByColumn: e.target.id
        })
        if (this.state.orderBy === 'asc') {
            order = 'desc'
            this.setState({
                orderBy: 'desc'
            })
            e.target.className = "mdi mdi-sort-descending"



        }
        else {
            order = 'asc'
            e.target.className = "mdi mdi-sort-ascending"
            this.setState({

                orderBy: 'asc'
            })
        }

        axios.get(window.App.appURL + `/api/usuarios?page=${this.state.activePage}&column=${this.state.orderByColumn}&order=${order}`).then(response => {
            this.setState({
                usuarios: response.data.data,
                itemsCountPerPage: response.data.per_page,
                totalItemsCount: response.data.total,
                activePage: response.data.current_page

            })
        }).catch(error => {
            if (typeof error.response !== 'undefined' && typeof error.response.status !== 'undefined') {
                this.errores(error)
            }
            else {
                console.log(error)
            }
        })


    }


    render() {
        if (this.state.readyToRedirect) {
            return <Redirect to="/" />
        }
        if (this.state.loader) {
            return <Loader />
        }

        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Usuarios</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><NavLink to="/">Inicio</NavLink></li>
                                    <li className="breadcrumb-item active">Usuarios</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Listado de Usuarios</h4><br></br>

                                        <Charge ready={this.state.ready} />

                                        {
                                            this.state.usuarios.length !== 0 ?
                                                (
                                                    <div className="table-responsive">
                                                        <table className="table table-hover table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>Nombre  <a href="" id="nombre" onClick={this.handleSortingChange} className="mdi mdi-sort-ascending" ><i ></i></a></th>
                                                                    <th>Apellidos</th>
                                                                    <th>Correo</th>
                                                                    <th>Rol</th>
                                                                    <th>Estado</th>
                                                                    {window.App.can_usuario_edit ? (
                                                                        <th>Acción</th>) : ''
                                                                    }
                                                                </tr>
                                                            </thead>
                                                            <tbody>


                                                                {
                                                                    this.state.usuarios.map((usuario, key) => {
                                                                        return (
                                                                            usuario.roles[0].id != 1 ? (
                                                                                <tr key={key}>
                                                                                    <td>{usuario.nombre}</td>
                                                                                    <td>{usuario.apellidos}</td>
                                                                                    <td>{usuario.email}</td>

                                                                                    <td>{usuario.roles.map((rol) => {
                                                                                        return (
                                                                                            rol.name
                                                                                        )
                                                                                    })}</td>

                                                                                    <td>{usuario.estado === 1 ? <label className="badge badge-success">Activo</label> : <label className="badge badge-danger">Inactivo</label>}</td>

                                                                                    {window.App.can_usuario_edit ? (
                                                                                        <td><Link to={`/usuarios/editar/${usuario.id}`} className="btn btn-primary btn-fw btn-sm" title="Editar">Editar<i className="mdi mdi-lead-pencil" style={{ fontSize: '15px' }}></i></Link></td>
                                                                                    ) : <td></td>}

                                                                                </tr>) : null
                                                                        )
                                                                    }
                                                                    )

                                                                }
                                                            </tbody>
                                                        </table>
                                                        <div className="d-flex justify-content-center" style={{ paddingTop: '10px' }}>
                                                            {window.App.can_usuario_create ? (
                                                                <div className="card-description">
                                                                    <NavLink to="/usuarios/nuevo" className="btn btn-success" title="Agregar nuevo usuario" >Agregar</NavLink>
                                                                </div>
                                                            ) : ''}
                                                        </div>
                                                        <div className="d-flex justify-content-center" style={{ paddingTop: '10px' }}>
                                                            <Pagination
                                                                activePage={this.state.activePage}
                                                                itemsCountPerPage={this.state.itemsCountPerPage}
                                                                totalItemsCount={this.state.totalItemsCount}
                                                                pageRangeDisplayed={this.state.pageRangeDisplayed}
                                                                onChange={this.handlePageChange}
                                                                itemClass="page-item"
                                                                linkClass="page-link"
                                                            />
                                                        </div>

                                                    </div>
                                                ) : this.state.ready ?
                                                    (
                                                        <div className="alert alert-warning" role="alert">
                                                            No hay registros de usuarios
                                                        </div>

                                                    ) : ''
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
