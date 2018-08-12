import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class NotificationsMenu extends Component {
    render() {
        return (
            <div className="notifications-menu">
                <FontAwesomeIcon className="notification-button header-menu-btn" icon="bell" />
            </div>
        )
    }
}

export default NotificationsMenu;