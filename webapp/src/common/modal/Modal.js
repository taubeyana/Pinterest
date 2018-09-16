import React, { Fragment } from 'react';
import './Modal.css'
import Backdrop from '../backdrop/Backdrop';

const Modal = props => {
    return (
       props.modalOpen ? 
        (<Fragment>
            <Backdrop modalClose = { props.modalClose } ></Backdrop>
            <div className = {props.className + " modal"}> 
                {props.children}
            </div>
        </Fragment>) :
        null
    )
}

export default Modal;   