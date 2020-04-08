import React, { Component } from 'react';
import { NavLink, Redirect, Link } from "react-router-dom";
import axios from 'axios/index';
import ErrorMessage from "../Global/Messages/ErrorMessage";
import SuccessMessage from '../Global/Messages/SuccessMessage';
import Loader from '../Global/Loader';

export default class Add extends Component {
    _isMounted = false;
    constructor() {
        super();
        this.state = {

            nombre: '',
            apellidos: '',
            email: '',
            password: '',
            role: '',
            roles: [],
            estado: '1',
            readyToRedirect: false,
            redirect: false,
            message: [],
            show_message: false,
            cancelar: false,
            loader: true,
            enviado: false


        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);
    }

    componentDidMount() {
        this._isMounted = true
        document.title = "AyM Store | Usuarios"
        axios.get(window.App.appURL + 'api/usuarios/nuevo').then(response => {
            if (this._isMounted) {
                this.setState({
                    roles: response.data,
                    loader: false

                })
            }

        }

        ).catch(error => {
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

    handleInputChange(e) {
        switch (e.target.id) {
            case 'nombre':
                this.setState({ nombre: e.target.value });
                break;

            case 'apellidos':
                this.setState({ apellidos: e.target.value });
                break;

            case 'email':
                this.setState({ email: e.target.value });
                break;

            case 'password':
                this.setState({ password: e.target.value });
                break;

            case 'role':
                this.setState({ role: e.target.value });
                break;

            case 'estado':
                this.setState({ estado: e.target.value });
                break;
        }

    }

    onSubmit(e) {
        e.preventDefault();
        if (!this.state.enviado) {
            const usuario = {
                nombre: this.state.nombre,
                apellidos: this.state.apellidos,
                email: this.state.email,
                password: this.state.password,
                rol: this.state.role,
                estado: this.state.estado

            };
            this.setState(this.setState({ enviado: true }))
            axios.post(window.App.appURL + 'api/usuarios/nuevo', usuario).then(
                res => this.setState({
                    show_message: true,
                    enviado: false
                },

                ))
                .catch(error => {
                    this.setState({ enviado: false })
                    if (typeof error.response !== 'undefined' && typeof error.response.status !== 'undefined') {
                        this.errores(error)
                    }
                    else {
                        console.log(error)
                    }
                })
        }

    }
    onCancel(e) {
        e.preventDefault();
        this.setState({
            cancelar: true
        })
    }

    render() {

        if (this.state.readyToRedirect) {
            return (<Redirect to="/" />)
        }
        if (this.state.cancelar) {
            return (<Redirect to="/usuarios" />)
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
                                    <li className="breadcrumb-item"><NavLink to="/usuarios">Usuarios</NavLink></li>
                                    <li className="breadcrumb-item active">Nuevo</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <SuccessMessage show_message={this.state.show_message} title={'Registro Creado'}
                                message={'Usuario agregado correctamente'} redirectTo={'/usuarios'} />
                            <div className="col-md-12">
                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title">Agregar Usuarios</h3>
                                    </div>
                                    <form className="forms-sample" onSubmit={this.onSubmit}>
                                        <div class="card-body">
                                            <div className="form-group">
                                                <label htmlFor="nombre">Nombre</label>
                                                <input type="text" className="form-control" id="nombre" value={this.state.nombre} onChange={this.handleInputChange} title="Digite el nombre" />
                                                <ErrorMessage message={this.state.message.nombre} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="apellido">Apellidos</label>
                                                <input type="text" className="form-control" id="apellidos" value={this.state.apellidos} onChange={this.handleInputChange} title="Digite los apellidos" />
                                                <ErrorMessage message={this.state.message.apellidos} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="email">Correo electrónico</label>
                                                <input type="email" className="form-control" id="email" value={this.state.email} onChange={this.handleInputChange} title="Digite el correo electrónico" />
                                                <ErrorMessage message={this.state.message.email} />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Contraseña</label>
                                                <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.handleInputChange} title="Digite la contraseña" />
                                                <ErrorMessage message={this.state.message.password} />
                                            </div>


                                            <div className="form-group">
                                                <label htmlFor="role">Rol</label>
                                                <select className="form-control" id="role" title="Seleccione un rol"
                                                    value={this.state.role} onChange={this.handleInputChange}>
                                                    <option value="" disabled>--Seleccione uno--</option>
                                                    {
                                                        this.state.roles.map((role, key) => {
                                                            return (
                                                                <option key={key} value={role.id} >{role.name}</option>
                                                            )
                                                        }
                                                        )
                                                    }
                                                </select>
                                                <ErrorMessage message={this.state.message.rol} />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="estado">Estado</label>
                                                <select className="form-control" id="estado" title="Seleccione el estado"
                                                    value={this.state.estado} onChange={this.handleInputChange}>
                                                    <option value="1" >Activo</option>
                                                    <option value="0">Inactivo</option>
                                                </select>
                                                <ErrorMessage message={this.state.message.estado} />
                                            </div>

                                            <div class="card-footer">
                                                <button type="submit" className="btn btn-primary mr-2" title="Presione para guardar">Guardar</button>
                                                <button className="btn btn-light" onClick={this.onCancel} title="Presione para cancelar" >Cancelar</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
