import React, {Component} from 'react';
import './HeaderMenus.css'
import Menu from './../../../common/menu/Menu';

class HeaderMenus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [
                {
                    text: "messages",
                    menuIcon: "comment",
                    menuItems: null,
                    menuType: null
                },
                {
                    name: "notifications",
                    menuIcon: "bell",
                    menuItems: null,
                    menuType: null
                },
                {
                    name: "settings",
                    menuIcon: "ellipsis-h",
                    menuItems: [
                        {
                            text: 'Settings',
                            buttonType: 'button',
                            faIcon: "bell"
                        },
                        {
                            text: 'Logout',
                            buttonType: 'button'
                        }
                    ],
                    menuType: "up"
                }
            ]
        }
    }
    render() {
        // <MessagesMenu/>
        //         <NotificationsMenu/>
        
        return (
            <div className="header-menus">
                <Menu data={this.state.menus}/>
            </div>
        )
    }
}

export default HeaderMenus;