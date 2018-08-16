import React, {Component} from 'react';
import './ProfilePicture.css';

class ProfilePicture extends Component {
    render() {
        return (
                this.props.src ?
                <img className = "profile-picture" src={this.props.src} alt={this.props.alt}/> :
                <span className="letter-image">{this.props.text.charAt(0).toUpperCase()}</span>
        );
    }
}
export default ProfilePicture;