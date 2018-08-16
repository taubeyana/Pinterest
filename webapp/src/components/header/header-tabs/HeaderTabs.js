import React, {Component} from 'react';
import './HeaderTabs.css';
// import HeaderTab from './../header-tab/HeaderTab';
import LinkButton from './../../../common/link-button/LinkButton';



class HeaderTabs extends Component {
    render() {
        return (
            <div className="header-tabs">
                {
                    this.props.data.map(item => <LinkButton {...item}/>)
                }
            </div>
        );
    }
}  
export default HeaderTabs;