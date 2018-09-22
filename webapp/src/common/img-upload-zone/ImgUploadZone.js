import Dropzone from 'react-dropzone';
import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './ImgUploadZone.css';

class ImgUploadZone extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    onImageDrop() {
        console.log('uploaded')
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