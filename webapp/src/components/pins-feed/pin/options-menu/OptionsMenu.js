import React, {Component} from 'react';
import './OptionsMenu.css';
import Menu from './../../../../common/menu/Menu';
import SendButton from './../../../../common/send-button/SendButton';
import ReportButton from './../../../../common/report-button/ReportButton';

class OptionsMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [
                {
                    name: "options",
                    menuIcon: "ellipsis-h",
                    menuItems: [
                        {
                            text: 'Hide',
                            buttonType: 'button',
                            faIcon: "times",
                            className: 'hide-btn'
                        },
                    ],
                    menuType: "up",
                    common: [{
                        name: 'SendButton'
                    }]
                }
            ]
        }
    }
    render() {
        return (
            <Menu data={this.state.menus}>
                <SendButton/>
                <ReportButton/>
            </Menu>
        )
    }
}

export default OptionsMenu;