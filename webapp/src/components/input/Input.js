import React, {Component} from 'react';
import './input.css';

class Input extends Component {
    render() {
        return (
            <input placeholder={this.props.placeholder}/>
        );
    }
}

export default Input;