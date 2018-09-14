import React from 'react';
import './Backdrop.css';

const Backdrop = (props) => {
    // console.log(props)
    return (
        <div 
        className = 'backdrop'
        onClick = { (e) => props.modalClose(e) }
        ></div>)
}

export default Backdrop;