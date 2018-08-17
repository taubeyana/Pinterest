import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                            isShownIcon: true,
                            faIcon: "plus"
                    
                        },
                        {
                            text: "Save from web"
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