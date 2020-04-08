import React, { Component } from 'react'
import '../assets/css/charge.css'

export default class Charge extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.ready) {



            return (

                <div className="gooey">
                    <span className="dot"></span>
                    <div className="dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

            )

        }
        else {
            return ('')
        }
    }

}
