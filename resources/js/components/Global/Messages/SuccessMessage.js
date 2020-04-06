import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';


export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            readyToRedirect: false,
            show: true,

        }
        this.confirmarMensaje = this.confirmarMensaje.bind(this);
    }

    confirmarMensaje() {
        this.setState({
            show: false
        })
        if (typeof this.props.redirectTo !== "undefined") {
            this.setState({
                readyToRedirect: true
            })
        }


    }

    componentWillReceiveProps() {
        if (!this.props.show_message && !this.state.show) {
            this.setState({
                show: true
            })
        }
    }




    render() {

        {
            if (this.props.show_message && this.state.show) {
                return (
                    <SweetAlert
                        success
                        show={this.state.show_message}
                        title={this.props.title}
                        onConfirm={this.confirmarMensaje}
                    >{this.props.message}</SweetAlert>
                )
            }
            else if (this.state.readyToRedirect) {
                return (<Redirect to={this.props.redirectTo} />)
            }
            else {
                return ('')
            }
        }







    }
}
