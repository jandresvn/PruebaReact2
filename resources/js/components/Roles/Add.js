import React, { Component } from 'react';
import { NavLink, Redirect, Link } from "react-router-dom";
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
import axios from 'axios/index';
import ErrorMessage from "../Global/Messages/ErrorMessage";
import SuccessMessage from '../Global/Messages/SuccessMessage';
import Loader from '../Global/Loader';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemPanel,
    AccordionItemButton
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

export default class Add extends Component {
    _isMounted = false;
    constructor() {
        super();
        this.state = {
            nombre: '',
            permisos: [],
            permisosSeleccionados: [],
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
        this._isMounted = true;
        document.title = "AyM Store | Agregar Roles"
        axios.get(window.App.appURL + '/api/roles/nuevo/').then(response => {
            if (this._isMounted) {
                this.setState({
                    permisos: response.data,
                    loader: false
                });


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



    handleInputChange(e) {
        this.setState({ nombre: e.target.value });
    }

    permisosChanged = (nuevoPermisos) => {
        this.setState({ permisosSeleccionados: nuevoPermisos });
    }


    onSubmit(e) {
        e.preventDefault();
        if (!this.state.enviado) {
            const usuario = {
                nombre: this.state.nombre,
                permisos: this.state.permisosSeleccionados
            };
            this.setState({ enviado: true })
            axios.post(window.App.appURL + 'api/roles/nuevo', usuario).then(res =>
                this.setState({
                    show_message: true,
                    enviado: false
                },

                )).catch(error => {
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
            return (<Redirect to="/roles" />)
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
                                <h1>Roles</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><NavLink to="/roles">Roles</NavLink></li>
                                    <li className="breadcrumb-item active">Nuevo</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <SuccessMessage show_message={this.state.show_message} title={'Rol Agregado'}
                                message={'Rol creado correctamente'} redirectTo={'/roles'} />
                            <div className="col-md-12">
                                <div class="card card-primary">
                                    <div class="card-header">
                                        <h3 class="card-title">Agregar Roles</h3>
                                    </div>
                                    <form className="forms-sample" onSubmit={this.onSubmit}>
                                        <div class="card-body">
                                        <div className="form-group">
                                            <label htmlFor="nombre">Nombre</label>
                                            <input type="text" className="form-control" id="nombre" value={this.state.nombre} onChange={this.handleInputChange} title="Digite el nombre" />
                                            <ErrorMessage message={this.state.message.nombre} />
                                        </div>
                                        <div className="form-group">
                                            <label >Permisos</label>
                                            <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}>
                                                {
                                                    this.state.permisos.map((permiso, key) => {
                                                        return (
                                                            <AccordionItem key={key}>
                                                                <AccordionItemHeading>
                                                                    <AccordionItemButton title="Expandir para seleccionar">
                                                                        {permiso.nombre}
                                                                    </AccordionItemButton>
                                                                </AccordionItemHeading>
                                                                <AccordionItemPanel>
                                                                    {
                                                                        permiso.permissions.map((perm, key) => {
                                                                            return (
                                                                                <div key={key} className="form-check form-check-primary">
                                                                                    <CheckboxGroup
                                                                                        checkboxDepth={2}
                                                                                        name="permisos"
                                                                                        value={this.state.permisosSeleccionados}
                                                                                        onChange={this.permisosChanged}>
                                                                                        <label className="form-check-label" >
                                                                                            <Checkbox className="form-check-input" checked value={perm.id} /> {perm.name} ({perm.description} ) <i className="input-helper"></i>
                                                                                        </label>

                                                                                    </CheckboxGroup>
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </AccordionItemPanel>
                                                            </AccordionItem>
                                                        )
                                                    })
                                                }
                                            </Accordion>
                                        </div>
                                        <button type="submit" className="btn btn-primary mr-2" title="Presione para guardar">Guardar</button>
                                        <button className="btn btn-light" onClick={this.onCancel} title="Presione para cancelar" >Cancelar</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
};
