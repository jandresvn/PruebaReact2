import React, { Component } from 'react';
import axios from 'axios';
import { NavLink, Redirect, Link } from "react-router-dom";
import Charge from '../Global/Charge'
import Loader from '../Global/Loader';

export default class Index extends Component {
    _isMounted = false;
    constructor() {
        super();
        this.state = {
            roles: [],
            readyToRedirect: false,
            redirect: false,
            nombre: '',
            ready: false,
            loader: true

        }
    }


    componentDidMount() {
        this._isMounted = true;
        document.title = "AyM Store | Roles"
        axios.get(window.App.appURL + 'api/roles').then(response => {
            if (this._isMounted) {
                this.setState({
                    roles: response.data,
                    ready: true,
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
                                <h1>Listado de Roles</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><NavLink to="/">Inicio</NavLink></li>
                                    <li className="breadcrumb-item active">Roles</li>
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
                                        <Charge ready={this.state.ready} />
                                        {
                                            this.state.ready ?
                                                (
                                                    <div className="table-responsive">
                                                        <table className="table table-hover table-bordered">
                                                            <thead>
                                                                <tr>
                                                                    <th>Rol</th>
                                                                    {window.App.can_role_edit_permisos ? (
                                                                        <th>Acción</th>) : ''
                                                                    }
                                                                </tr>
                                                            </thead>
                                                            <tbody>


                                                                {
                                                                    this.state.roles.map((role, key) => {
                                                                        return (
                                                                            <tr key={key}>
                                                                                <td>{role.name}</td>

                                                                                {window.App.can_role_edit_permisos ? (
                                                                                    <td><Link to={`roles/editar/${role.id}`} className="btn btn-primary btn-fw btn-sm" title="Editar" >Editar<i className="mdi mdi-lead-pencil" style={{ fontSize: '15px' }}></i> </Link></td>
                                                                                ) : <td></td>}
                                                                            </tr>
                                                                        )
                                                                    }
                                                                    )

                                                                }
                                                            </tbody>
                                                        </table>
                                                        <div className="d-flex justify-content-center" style={{ paddingTop: '10px' }}>
                                                            {window.App.can_role_create ? (
                                                                <div className="card-description">
                                                                    <NavLink to="/roles/nuevo" className="btn btn-success" title="Agregar nuevo rol" >Agregar</NavLink>
                                                                </div>) : ''}
                                                        </div>

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
