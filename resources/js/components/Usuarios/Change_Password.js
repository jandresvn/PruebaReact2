import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios/index';
import ErrorMessage from "../Global/Messages/ErrorMessage";
import SuccessMessage from '../Global/Messages/SuccessMessage';
import Loader from '../Global/Loader';
import { addBusinessDays } from 'date-fns';
import { NavLink } from "react-router-dom";

export default class Change_Password extends Component {
    _isMounted = false;
    constructor() {
        super();
        this.state = {

            password: '',
            password_confirmation: '',
            password_actual: '',
            readyToRedirect: false,
            // redirect: false,
            message: [],
            show_message: false,
            cancelar: false,
            loader: true


        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCancel = this.onCancel.bind(this);

    }

    componentDidMount() {
        this._isMounted = true
        document.title = "AyM Store | Cambiar Contraseña"
        axios.get(window.App.appURL + 'api/editar_contrasena').then(response => {
            this.setState({
                loader: false
            })
        }

        ).catch(error => {
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
            case 'password_actual':
                this.setState({ password_actual: e.target.value });
                break;
            case 'password':
                this.setState({ password: e.target.value });
                break;

            case 'password_confirmation':
                this.setState({ password_confirmation: e.target.value });
                break;
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const usuario = {
            id: window.App.user.id,
            password_actual: this.state.password_actual,
            password: this.state.password,
            password_confirmation: this.state.password_confirmation,

        };
        axios.post(window.App.appURL + 'api/usuario/editar_contrasena', usuario).then(
            res => this.setState({ show_message: true },

            ))
            .catch(error => {

                if (typeof error.response !== 'undefined' && typeof error.response.status !== 'undefined') {
                    this.errores(error)
                }
                else {
                    console.log(error)
                }
            })

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
            return (<Redirect to="/" />)
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
                                <h1>Cambiar Contraseña</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><NavLink to="/">Inicio</NavLink></li>
                                    <li className="breadcrumb-item active">Cambiar Contraseña</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <SuccessMessage show_message={this.state.show_message} title={'Contraseña Modificada'}
                                message={'Contraseña modificada correctamente'} redirectTo={'/'} />

                            <div className="col-lg-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <form className="forms-sample" onSubmit={this.onSubmit}>

                                            <div className="form-group">
                                                <label htmlFor="password_actual">Contraseña actual</label>
                                                <input type="password" className="form-control" id="password_actual" value={this.state.password_actual} onChange={this.handleInputChange} title="Digite la contraseña actual" />
                                                <ErrorMessage message={this.state.message.password_actual} />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="password">Contraseña</label>
                                                <input type="password" className="form-control" id="password" value={this.state.password} onChange={this.handleInputChange} title="Digite la nueva contraseña" />
                                                <ErrorMessage message={this.state.message.password} />
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="password_confirmation">Confirmar Contraseña</label>
                                                <input type="password" className="form-control" id="password_confirmation" value={this.state.password_confirmation} onChange={this.handleInputChange} title="Digite la contraseña de confirmación" />
                                                <ErrorMessage message={this.state.message.password_confirmation} />
                                            </div>
                                            <button type="submit" className="btn btn-primary mr-2" title="Presione para cambiar">Guardar</button>
                                            <button className="btn btn-light" onClick={this.onCancel} title="Presione para cancelar"  >Cancelar</button>
                                        </form>
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
