import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import MenuItem from './../menu-item/MenuItem';
// import HeaderTab from './../../components/header/header-tab/HeaderTab';
import LinkButton from './../link-button/LinkButton';
import Triangle from './../triangle/Triangle';
import './Menu.css';

class Menu extends Component {
    render() {
        return (
            this.props.data.map(item => {
                return (
                <div className={item.name + "-menu menu"}>
                    {item.menuIcon? <FontAwesomeIcon className={item.name + "-button menu-btn"} icon={item.menuIcon} /> : null}
                    {item.menuItems?
                         <div className="items-wrapper">
                            {item.menuType? <Triangle direction={item.menuType || "up"}></Triangle> : null}
                            {item.menuItems.map(btn => <LinkButton text={btn.text} isShownPic={btn.isShownIcon} className={"btn-"+item.name}/>  )}
                        </div> : null}
                </div>)
            })

            
        );
    }

}
export default Menu;