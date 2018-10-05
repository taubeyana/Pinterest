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
        let dropzoneStyle = {
            isvisible: false,
            backgroundImage: 'none',
            backgroundSize: 'cover'
        }
        return (
            <Dropzone 
                style = {this.props.style}
                required
                className = { "dropzone " + this.props.className }
                multiple={false}
                accept="image/*"
                onDrop={(files) => this.props.onDrop(files)}
                >
                 {this.props.style.isvisible ?  null :<div className = "dz-content">
                 <FontAwesomeIcon icon="camera"/>
                 <span> Drag and drop or click to upload </span>
             </div>  }
                
            </Dropzone>
        )
        
    }
}

export default ImgUploadZone;