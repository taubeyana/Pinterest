import Dropzone from 'react-dropzone';
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ImgUploadZone.css';
import uploadImagesService from '../../services/uploadImagesService'

class ImgUploadZone extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadedFile: null,
            uploadedFileCloudinaryUrl: null
        }
    }
    onImageDrop(files) {

        this.setState({
            uploadedFile: files[0]
        })
        uploadImagesService.uploadImage(files[0])
        .then(res => {
            this.setState({uploadedFileCloudinaryUrl: res.data.secure_url})
            console.log(this.state.uploadedFileCloudinaryUrl)
        })
    }
    render() {
        return (
            <Dropzone
                className = { "dropzone " + this.props.className }
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
                <FontAwesomeIcon icon="camera"/>
                <span> Drag and drop or click to upload </span>
            </Dropzone>
        )
        
    }
}

export default ImgUploadZone;