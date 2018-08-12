import React, {Component} from 'react';
import './HeaderImg.css';

class HeaderImg extends Component {
    render() {
        return (
            
                this.props.src ?
                <img className = "header-image" src={this.props.src} alt={this.props.alt}/> :
                <span className="letter-image">{this.props.text.charAt(0).toUpperCase()}</span>
            
        );
    }
}
export default HeaderImg;