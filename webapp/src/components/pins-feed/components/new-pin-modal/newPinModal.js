import React, { Component } from 'react';
import './newPinModal.css';
import Modal from './../../../../common/modal/Modal';
import Button from '../../../../common/button/Button';
import CloseButton from '../../../../common/close-button/CloseButton';
import ImgUploadZone from '../../../../common/img-upload-zone/ImgUploadZone';
import uploadImagesService from '../../../../services/uploadImagesService';
import Input from '../../../../common/input/Input';
import Axios from 'axios';
import getUrlTitle from '../../../../services/getUrlTitle'

class NewPinModal extends Component  {
    constructor(props) {
        super(props);
        this.state = {
            uploadedFile: null,
            newPinForm: {
                uploadedFileCloudinaryUrl: null,
                link: null,
                description: '' 
            },
            dropZoneStyling: {
                isvisible: false,
                backgroundImage: 'none',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
            }
        }
    }
    onImageDrop(files) {
        let newState = {...this.state, 
                        uploadedFile: files[0], 
                        dropZoneStyling: 
                        {...this.state.dropZoneStyling, 
                        backgroundImage:`url(https://i.kinja-img.com/gawker-media/image/upload/s--LytxZcab--/c_fit,fl_progressive,q_80,w_636/1481054780733836946.gif)`, 
                        isvisible: true }}
        this.setState(newState)

        uploadImagesService.uploadImage(files[0])
        .then(res => {
            this.setState(
                {...this.state, newPinForm:  
                {...this.state.newPinForm, uploadedFileCloudinaryUrl:res.data.secure_url},
                dropZoneStyling: {...this.state.dropZoneStyling, backgroundImage: `url(${res.data.secure_url})` }
            })
        })
    }
    onFormSubmit(e) {
        e.preventDefault()
        const data = new FormData(e.target);
        let formdata = {
            link: data.get('website'),
            body: data.get('description'),
            img: this.state.newPinForm.uploadedFileCloudinaryUrl,
            title: ''
        }
        getUrlTitle(data.get('website'))
        .then(title => {
            formdata.title = title;
            return formdata
            
        }).then(data => {
            Axios.post('/api/pins',data)
            console.log(data)
        })
        .then(()=>this.props.modalClose())
        .catch(err => console.log(err))
    }
    render() {
        return (
        <Modal 
            className = "new-pin-modal" 
            modalOpen = { this.props.modalOpen } 
            modalClose = { this.props.modalClose }>
            <form onSubmit={this.onFormSubmit.bind(this)}>
                <h1> Create Pin </h1>
                <CloseButton handleClick = { this.props.modalClose }/>
                <div className="content-wrapper"> 
                    <ImgUploadZone style = {this.state.dropZoneStyling} onDrop = {this.onImageDrop.bind(this)} className = "upload-zone" />
                    <div className = "form-input-wrapper">
                        <span> Website </span>
                        <Input 
                            inputtype = 'input'
                            type = "url" 
                            required
                            name = "website"
                            className = "form-input" 
                            placeholder="Add the URL this Pin links to"/>
                        <span> Description </span>
                        <Input  
                            name = "description"
                            inputtype = 'textarea'
                            className = "form-textarea" 
                            placeholder ="Say more About this Pin">
                        </Input>
                    </div>
                </div>
                <div className = "footer-buttons">
                    <Button
                        buttonType = "button"
                        type = "submit"
                        className = "submit-btn"
                        text = "Done">
                    </Button>
                </div>
            </form>
        </Modal>)
    }
}

export default NewPinModal;
