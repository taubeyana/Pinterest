import React, {Component} from 'react';
import './HeaderImg.css';

class HeaderImg extends Component {
    render() {
        return (
            <img className = "header-image" src={this.props.src} alt={this.props.alt}/>
        )
    }
}
export default HeaderImg;