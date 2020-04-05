import React, { Component } from 'react';
import ErrorMessage from '../Global/Messages/ErrorMessage.js'
import axios from 'axios';
import { Link } from 'react-router-dom'

export default class Login extends Component {


    constructor() {
        super();

        this.state = {
            password: '',
            email: '',
            cargando_login: false,
            message: []
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        document.title = "AyM Store | Iniciar Sesión"
    }

    handleInputChange(e) {
        if (e.target.id === 'email') {
            this.setState({
                email: e.target.value
            });
        }
        else if (e.target.id === 'password') {
            this.setState({
                password: e.target.value
            });
        }
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password

        };
        this.setState({ cargando_login: true })
        axios.post(window.App.appURL + 'api/login', user).then(res =>
            window.location.replace(window.App.appURL,
                this.setState({ cargando_login: false }))
        )
            .catch(error => {
                this.setState({ cargando_login: false })
                if (error.response.status === 422) {
                    this.setState({
                        message: error.response.data.errors
                    })
                }
            })
    }

    render() {

        return (
            <div className="login-box">
                <div className="login-logo">
                    <a href="../../index2.html"><b>AyM</b>Store</a>
                </div>
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Inicia sesión para comenzar tu sesión</p>

                        <form onSubmit={this.onSubmit}>
                            <div className="input-group mb-3">
                                <input className="form-control" type="email" placeholder="Correo Electrónico" autoComplete="email" id="email" name="email" value={this.state.email} onChange={this.handleInputChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope"></span>
                                    </div>
                                </div>
                            </div>
                            <ErrorMessage message={this.state.message.email} />
                            <div className="input-group mb-3">
                                <input className="form-control" type="password" placeholder="Contraseña" autoComplete="current-password" id="password" name="password" value={this.state.password} onChange={this.handleInputChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock"></span>
                                    </div>
                                </div>
                            </div>
                            <ErrorMessage message={this.state.message.password} />
                            <div className="row">
                                <div className="col-6">
                                    <button className="btn btn-primary px-4" type="submit">
                                        {this.state.cargando_login ? (<div>
                                            <span className="spinner-border spinner-border-sm"></span>
                                            Iniciando...</div>) :
                                            <div>Iniciar Sesión</div>}
                                    </button>
                                </div>
                            </div>
                        </form>

                        <p className="mb-1">
                            <a href="forgot-password.html">Olvidé mi contraseña</a>
                        </p>

                    </div>
                </div>
            </div>

        );
    }
}
