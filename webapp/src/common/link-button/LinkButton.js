import React, {Component} from 'react';
import './LinkButton.css';
import ProfilePicture from './../profile-picture/ProfilePicture';

class LinkButton extends Component {
    render() {
        return (
            <div className={"link-btn " + this.props.className}>
                {
                    this.props.isShownIcon && 
                    <ProfilePicture src={this.props.img} text={this.props.text}/>
                }
                <span>{this.props.text}</span>
                
            </div>
        );
    }
}  
export default LinkButton;