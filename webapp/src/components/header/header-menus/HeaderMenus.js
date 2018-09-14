import React, { Component } from 'react';
import './HeaderMenus.css'
import Menu from './../../../common/menu/Menu';
import uniqid from 'uniqid';

class HeaderMenus extends Component {
    constructor(props) {
        super(props);
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
                            className: 'settings-btn',
                            handleClick: this.handleClick
                        },
                        {
                            text: 'Logout',
                            buttonType: 'button',
                            faIcon: null,
                            className: 'logout-btn',
                            handleClick: this.handleClick
                        }
                    ],
                    isDisplayed: true,
                    menuType: "up"
                    
                }
            ],
            
        }
    }
    handleClick = () => {
        console.log('ok')
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