import React, { Component } from 'react';
import './FloatingMenu.css';
import Menu from './../../common/menu/Menu';
import uniqid from 'uniqid';

class FloatingMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [
                {
                    name: "add",
                    menuIcon: "plus",
                    buttonType: 'button',
                    menuItems: [
                        {
                            text: "Upload a Pin",
                            buttonType: 'button',
                            faIcon: "plus",
                            className: 'upload-btn'
                            
                        },
                        {
                            text: "Save from web",
                            buttonType: 'button',
                            faIcon: "globe",
                            className: 'save-from-web-btn'
                        }
                    ],
                    menuType: "right",
                    isVisible: false
                },
            ]
        }
    }
    render() {
        return (
            this.state.menus.map(item => <Menu item={ item } key={ uniqid() }/>)
        );
    }
}

export default FloatingMenu;