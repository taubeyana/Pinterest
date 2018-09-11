import React from 'react';
import './input.css';

const Input = props => {
        return (
            <input placeholder = { props.placeholder }/>
        );
}

export default Input;

// import React, { Component } from 'react';
// class Input extends Component {
//     render() {
//         return (
//             <input placeholder = { this.props.placeholder }/>
//         );
//     }
// }

// export default Input;