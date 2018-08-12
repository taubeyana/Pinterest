import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MessagesMenu extends Component {
    render() {
        return (
            <div className="messages-menu">
                <FontAwesomeIcon className="message-button header-menu-btn" icon="comment" />
            </div>
        )
    }
}

export default MessagesMenu;