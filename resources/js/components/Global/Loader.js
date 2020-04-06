import React, { Component } from 'react';
import '../assets/css/loader.css'


export default class Index extends Component {
    componentDidMount(){
        document.title = "AyM Store | Inicio"

    }
    render() {
        return (
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        )
    }

}