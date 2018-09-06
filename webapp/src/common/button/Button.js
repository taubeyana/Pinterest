import React, { Component } from 'react';
import './Button.css';
import ProfilePicture from './../profile-picture/ProfilePicture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                    className = { "link-btn " + this.props.className }>
                    { this.renderInnerButton(this.props) }
                </a> 
            );
        } else if (this.props.buttonType === 'button') {
            return (
                <button 
                    type = { this.props.type } 
                    className = { "btn " + this.props.className } 
                    onClick = { this.props.handleClick }>
                    { this.renderInnerButton(this.props) }
                </button>
            );
        } else {
            return null 
        }
    }
}
export default Button;

