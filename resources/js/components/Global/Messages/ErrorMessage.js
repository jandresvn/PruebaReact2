import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'

export default class Index extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        {
            if (this.props.message != null) {

                return (
                    <div style={{ color: 'red', fontSize: '13px' }}>
                        {
                            this.props.message.map((message, key) => {
                                return (
                                    <div key={key}>{message}</div>
                                )
                            })
                        }

                    </div>
                )
            }
            else {
                return ('')
            }
        }

    }
}
