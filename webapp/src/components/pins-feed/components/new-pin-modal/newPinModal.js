import React, { Fragment } from 'react';
import './newPinModal.css';
import Modal from './../../../../common/modal/Modal';
import Form from './../../../../common/form/Form';
import Button from '../../../../common/button/Button';


const NewPinModal = props => {
        const renderModal = (modalType) => {
            let input;
            if ( modalType === 'userCustom') {
                input = "Website"
                return (
                    <Fragment>
                        <div className = "upload-area"></div>
                        <div className = "form-input-wrapper">
                            <span> { input } </span>
                            <input className = "form-input" placeholder="Add the URL this Pin links to"/>
                            <span> Description </span>
                            <textarea className = "form-textarea" placeholder="Say more About this Pin"></textarea>
                        </div>
                    </Fragment>
                );
            } else if ( modalType === 'fromUrl' ) {
                input = "Add a URL"
                return (
                    <Fragment>
                            <span> { input } </span>
                            <input className = "form-input" placeholder="https://"/>
                    </Fragment>
                )
            } else {
                return null;
            }
        }
        return (
            <Modal 
                className = "new-pin-modal" 
                modalOpen = { props.modalOpen } 
                modalClose = { props.modalClose }>
               <h1> Create Pin </h1>
                <form>
                    { renderModal(props.modalType) }
                    <Button
                    buttonType = "button"
                    type = "submit"
                    className = "submit-btn"
                    text = "Done">
                   
                </Button>
                </form>
                <div className = "footer-buttons">
                    {/* props.modalTypes.map(item => {
                        return <Button {...item}/>
                    }) */}


                    <Button
                        buttonType = "button"
                        type = "button"
                        className = "upload-pin-btn"
                        text = "Upload Pin"
                        handleClick = { (e) => props.handleModalType("userCustom")}>>
                    </Button>
                    <Button
                        buttonType = "button"
                        type = "button"
                        className = "save-from-site-btn"
                        text = "Save from site"
                        handleClick = { (e) => props.handleModalType("fromUrl")}>>>
                    </Button>

                    
                </div>
                
            </Modal>)
}

export default NewPinModal;