import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './../button/Button';
import Triangle from './../triangle/Triangle';
import './Menu.css';

class Menu extends Component {
    render() {
        return (
            this.props.data.map(item => {
                return (
                    <div className={item.name + "-menu menu"}>
                    {item.menuIcon ? <FontAwesomeIcon className={item.name + "-menu-btn menu-btn"} icon={item.menuIcon} /> : null}
                    {
                        item.menuItems?
                        <div className="items-outer-wrapper">
                            <div className="items-inner-wrapper">
                                {item.menuType ? <Triangle direction={item.menuType || "up"}></Triangle> : null}
                                {item.menuItems.map(btn => <Button text={btn.text} faIcon={btn.faIcon} buttonType={btn.buttonType} className={btn.className} />  )}
                            </div>
                        </div> 
                        : null
                    }
                    </div>)
                })
            );
        }
    }
    export default Menu;