import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SettingsMenu extends Component {
    render() {
        return (
            <div className="settings-menu">
                <FontAwesomeIcon className="settings-button header-menu-btn" icon="ellipsis-h" />
            </div>
        )
    }
}

export default SettingsMenu;