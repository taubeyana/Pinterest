import React, { Component } from 'react';
import './HeaderMenus.css'
import Menu from './../../../common/menu/Menu';
import uniqid from 'uniqid';

class HeaderMenus extends Component {
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this)
        this.state = {
            menus: [
                {
                    name: "messages",
                    menuIcon: "comment",
                    buttonType: 'button',
                    isDisplayed: true,
                    menuItems: null,
                    menuType: null
                },
                {
                    name: "notifications",
                    isDisplayed: true,
                    menuIcon: "bell",
                    buttonType: 'button',
                    menuItems: null,
                    menuType: null
                },
                {
                    name: "settings",
                    menuIcon: "ellipsis-h",
                    buttonType: 'button',
                    menuItems: [
                        {
                            text: 'Settings',
                            buttonType: 'button',
                            faIcon: null,
                            className: 'settings-btn'
                        },
                        {
                            text: 'Logout',
                            buttonType: 'button',
                            faIcon: null,
                            className: 'logout-btn'
                        }
                    ],
                    isDisplayed: true,
                    menuType: "up"
                    
                }
            ],
            
        }
    }
    toggleMenu(index)  {
        let currentState = { ...this.state }
        let updatedState = currentState.menus[index].isDisplayed = !currentState.menus[index].isDisplayed;
        this.setState({ updatedState })
    }
    render() {
        return (
            <div className = "header-menus">
                { this.state.menus.map((item) => <Menu item={item} key={ uniqid() }/>) }
            </div>
        )
    }
}

export default HeaderMenus;