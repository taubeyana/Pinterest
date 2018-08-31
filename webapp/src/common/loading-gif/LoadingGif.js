import React, {Component} from 'react';
import './LoadingGif.css'
import gif from './../../img/loading.gif';

class LoadingGif extends Component {
    render() {
        return (
            <img className="loading-gif" src={gif}/>
        )
    }
}
export default LoadingGif;