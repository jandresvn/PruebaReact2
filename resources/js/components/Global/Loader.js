import React, { Component } from 'react';
import '../assets/css/loader.css'


export default class Index extends Component {
    componentDidMount(){
        document.title = "AyM Store | Inicio"

    }
    render() {
        return (
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Cargando...</h1>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="content">
                    <div className="container-fluid">
                        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
                    </div>
                </section>
            </div>

        )
    }

}
