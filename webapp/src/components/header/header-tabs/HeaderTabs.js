import React, {Component} from 'react';
import './HeaderTabs.css';
import HeaderTab from './../header-tab/HeaderTab';



class HeaderTabs extends Component {
    render() {
        return (
            <ul className="header-tabs">
                {
                    this.props.data.map(item => <HeaderTab {...item}/>)
                }
            </ul>
        );
    }
}  
export default HeaderTabs;