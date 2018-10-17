import React, { Component } from 'react';
import './Footer.css';
import Button from '../../common/button/Button';
import uniqid from 'uniqid';

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            footerButtons: [
                {
                    text: "Home",
                    className: "footer-btn",
                    img: 'https://goo.gl/M1iGNy',
                    buttonType: 'router-link',
                    to: "/"
                },
                {
                    text: "Following",
                    faIcon: "user-friends",
                    className: "footer-btn",
                    buttonType: 'router-link',
                    to: "/following"
                },
                {
                    text: "Notifications",
                    className: "footer-btn",
                    faIcon: "bell",
                    buttonType: 'router-link',
                    to: "/notifications"
                },
                {
                    text: "Saved",
                    faIcon: "user",
                    className: "footer-btn",
                    buttonType: 'router-link',
                    to: '/taubeyana'
                },
            ]
        }
    }
    render() {
        return (
            <div className = "footer-buttons">
                {
                    this.state.footerButtons.map(item => <Button { ...item } key={ uniqid() }/>)
                }  
            </div>
            
        );
    }
}  
export default Footer;