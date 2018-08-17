import React, {Component} from 'react';
import './FloatingMenu.css';
import Menu from './../../common/menu/Menu'
class FloatingMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [
                {
                    name: "add",
                    menuIcon: "plus",
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
                    menuType: "right"
                },
            ]
        }
    }
    render() {
        return (
            <Menu  data={this.state.menus}/>
        );
    }
}

export default FloatingMenu;