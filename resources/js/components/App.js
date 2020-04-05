import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './Global/Header';
import Sidebar from './Global/Sidebar';
import Content from './Global/Content';
import Footer from './Global/Footer'

export default class App extends Component {
    constructor() {
        super();
    };

    static propTypes = {
        children: PropTypes.object.isRequired,
    }

    render() {

        const { children } = this.props

        if (window.App.loggedIn) {
            return (
                <div className="wrapper">
                    <Header />
                    <Sidebar />
                    <Content body={children} />
                    <Footer />
                </div>
            );
        }
        else {
            return(
                <div className="hold-transition login-page">
                    <Content body={children} />
                </div>
            )
        }

    }
}

