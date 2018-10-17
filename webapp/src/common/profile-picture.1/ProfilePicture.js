import React, { Component } from 'react';
import './ProfilePicture.css';
import Button from '../button/Button';

const user =  {
            text: this.props.user.firstName,
            src: this.props.user.img,
            className: "header-tab",
            activeClassName: 'active-header-tab',
            buttonType: 'router-link',
            to: '/' + this.props.user.username,
            letterImage: this.props.firstName.charAt(0).toUpperCase()
            
        }
class ProfileButtonLink extends Component {

    render() {
        
        return (
            <Button {...user }/>
        );
    }
}
export default ProfileButtonLink;

