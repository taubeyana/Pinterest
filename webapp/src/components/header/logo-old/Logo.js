import React, { Component } from 'react';
import './Logo.css';


class Logo extends Component {
    render() {
        return (
            <img className = "logo" src = {this.props.src} alt={this.props.alt}/>
        );
    }
}
export default Logo;

