import React, {Component} from 'react';
import './HeaderTab.css';
import HeaderImg from './../header-image/HeaderImg';

class HeaderTab extends Component {
    render() {
        return (
            
            <li className="header-tab">
                {
                    this.props.isShownIcon && 
                    <HeaderImg text={this.props.text}/>
                }
                <span>{this.props.text}</span>
            </li>
        );
    }
}  
export default HeaderTab;