import React, { Component } from 'react';
import './SendButton.css';
import Button from './../button/Button';

class SendButton extends Component {
    render() {
        return(
            <Button 
                buttonType = "button" 
                text = "Send" 
                faIcon = "share-square" 
                className = "send-btn gray-btn"/>
        )
    }
}
export default SendButton;