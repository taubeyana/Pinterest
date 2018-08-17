import React, {Component} from 'react';
import './LinkButton.css';
import ProfilePicture from './../profile-picture/ProfilePicture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class LinkButton extends Component {
    render() {
        return (
            <div className={"link-btn " + this.props.className}>
                {
                    this.props.isShownIcon && 
                    <ProfilePicture src={this.props.img} text={this.props.text}/>
                }
                {this.props.faIcon ? <FontAwesomeIcon className={this.props.icon + "-faIcon faIcon"} icon={this.props.faIcon} /> : null}
                <span>{this.props.text}</span>
                
            </div>
        );
    }
}  
export default LinkButton;