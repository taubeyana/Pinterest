import React, {Component} from 'react';
import './HeaderMenus.css'
import MessagesMenu from './messages/MessagesMenu';
import NotificationsMenu from './notifications/NotificationsMenu';
import SettingsMenu from './settings/SettingsMenu';

class HeaderMenus extends Component {
    render() {
        return (
            <div className="header-menus">
                <MessagesMenu/>
                <NotificationsMenu/>
                <SettingsMenu/>
            </div>
        )
    }
}

export default HeaderMenus;