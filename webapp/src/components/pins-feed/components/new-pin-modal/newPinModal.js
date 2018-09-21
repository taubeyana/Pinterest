import React, { Fragment } from 'react';
import './newPinModal.css';
import Modal from './../../../../common/modal/Modal';
import Button from '../../../../common/button/Button';
import CloseButton from '../../../../common/close-button/CloseButton';


const NewPinModal = props => {
    const renderButtons = (modalType) => {
        switch (modalType) {
            case 'userCustom':
                return (
                    <Fragment>
                    <Button
                    buttonType = "button"
                    type = "button"
                    className = {"upload-pin-btn focused-btn"}
                    text = "Upload Pin"
                    handleClick = { (e) => props.handleModalType(e,"userCustom")}>>
                </Button>
                <Button
                    buttonType = "button"
                    type = "button"
                    className = "save-from-site-btn"
                    text = "Save from site"
                    handleClick = { (e) => props.handleModalType(e,"fromUrl")}>>>
                </Button>
                </Fragment>
                )
            case "fromUrl":
                return(
                    <Fragment>
                    <Button
                    buttonType = "button"
                    type = "button"
                    className = {"upload-pin-btn"}
                    text = "Upload Pin"
                    handleClick = { (e) => props.handleModalType(e,"userCustom")}>>
                </Button>
                <Button
                    buttonType = "button"
                    type = "button"
                    className = "save-from-site-btn focused-btn"
                    text = "Save from site"
                    handleClick = { (e) => props.handleModalType(e,"fromUrl")}>>>
                </Button>
                </Fragment>
                )
            default:
                return null;
        }
    }
    const renderModal = (modalType) => {
        let input;
        switch (modalType) {
            case 'userCustom': 
                input = "Website"
                return (
                    <Fragment>
                        <div className = "upload-area"></div>
                        <div className = "form-input-wrapper">
                            <span> { input } </span>
                            <input 
                                className = "form-input" 
                                placeholder="Add the URL this Pin links to"/>
                            <span> Description </span>
                            <textarea 
                                className = "form-textarea" 
                                placeholder ="Say more About this Pin">
                            </textarea>
                        </div>
                    </Fragment>
                );
            case 'fromUrl': 
                input = "Add a URL"
                return (
                    <div className = "fromUrl-wrapper">
                        <span> { input } </span>
                        <input 
                            className = "form-input" 
                            placeholder = "https://"/>
                    </div>
                )
            default:
                return null;
        }
    }
    return (
        <Modal 
            className = "new-pin-modal" 
            modalOpen = { props.modalOpen } 
            modalClose = { props.modalClose }>
            <h1> Create Pin </h1>
            <CloseButton handleClick = { props.modalClose }/>
            <div className="content-wrapper"> 
                { renderModal(props.modalType) }
            </div>
            <div className = "footer-buttons">
               {renderButtons(props.modalType)}
                <Button
                    buttonType = "button"
                    type = "submit"
                    className = "submit-btn"
                    text = "Done">
                </Button>
            </div>
        </Modal>)
}

export default NewPinModal;