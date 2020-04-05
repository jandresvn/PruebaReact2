import React, { Component } from 'react';
import PropTypes from "prop-types";


export default class Content extends Component {

    constructor(props) {
        super(props)
    }

    static propTypes = {
        body: PropTypes.object.isRequired
    };

    render() {
        const { body } = this.props;
            return (

                <div>
                    {body}
                </div>

            );


    }
}
