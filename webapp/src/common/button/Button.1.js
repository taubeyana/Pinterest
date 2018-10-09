import React, { Component } from 'react';
import './Button.css';
import ProfilePicture from './../profile-picture/ProfilePicture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ----- Button creation props-----: 
// 
// --- Important ---:
//   
//      buttonType: button or link
// 
// --- Optional ---:
// 
//  - Shared props for buttons and links: 
//      src, alt, className, text, faIcon
// 
//  - For links:  href, target
//  - For buttons: type, handleClick

class Button extends Component {
    renderInnerButton(props) {
        return (
            <React.Fragment>
                { props.img && 
                    <ProfilePicture 
                        src = { props.img } 
                        text =  { props.text }/> 
                }
                { props.src && 
                    <img src = { props.src } 
                         alt={ props.alt } 
                         className = "btn-img"/> 
                }
                { props.faIcon && 
                    <FontAwesomeIcon 
                        className = { props.faIcon + "-faIcon faIcon" } 
                        icon = { props.faIcon } /> 
                }
                { props.text && 
                    <span> { props.text } </span> 
                }
            </React.Fragment>
        );
    }
    render() {
        if (this.props.buttonType === 'link') {
            return (
                <a  href = { this.props.href }
                    target = { this.props.target }
                    id = { this.props.id }
                    className = { "link-btn " + this.props.className }>
                    { this.renderInnerButton(this.props) }
                </a> 
            );
        } else if (this.props.buttonType === 'button') {
            return (
                <button 
                    onBlur = { this.props.handleBlur }
                    id = { this.props.id }
                    type = { this.props.type } 
                    className = { "btn " + this.props.className }
                    onSubmit = { this.props.handleSubmit } 
                    onClick = { this.props.handleClick }
                    onFocus = { this.props.handleFocus } >
                    {this.props.children}
                    { this.renderInnerButton(this.props) }
                </button>
            );
        } else {
            return null 
        }
    }
}
export default Button;

