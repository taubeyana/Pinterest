import React from 'react';
import './newPinModal.css';
import Modal from './../../../../common/modal/Modal';
import Form from './../../../../common/form/Form';
import Button from '../../../../common/button/Button';


const NewPinModal = props => {
    return (
        <Modal className = "new-pin-modal">
           <h1> Create Pin </h1>
            <form>
                <div className = "upload-area"></div>
                <div className = "form-input-wrapper">
                    <span> Website </span>
                    <input className = "form-input" placeholder="Add the URL this Pin links to"/>
                    <span> Description </span>
                    <textarea className = "form-textarea" placeholder="Say more About this Pin"></textarea>
                </div>
                <Button
                    buttonType = "button"
                    type = "submit"
                    className = "submit-btn"
                    text = "Done">
                </Button>
            </form>
            <div className = "footer-buttons">
                <Button
                    buttonType = "button"
                    type = "button"
                    className = "upload-pin-btn"
                    text = "Upload Pin">
                </Button>
                <Button
                    buttonType = "button"
                    type = "button"
                    className = "save-from-site-btn"
                    text = "Save from site">
                </Button>
            </div>
        </Modal>
    )
    
}

export default NewPinModal;