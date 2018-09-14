import React from 'react';
import './Modal.css'
import Backdrop from '../backdrop/Backdrop';

const Modal = props => {
    return (
       props.modalOpen ? 
        (<div>
            <Backdrop modalClose = { props.modalClose } ></Backdrop>
            <div className = {props.className + " modal"}> 
                {props.children}
            </div>
        </div>) :
        null
    )
}

export default Modal;   