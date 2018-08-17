import React, {Component} from 'react';
import './HeaderTabs.css';
import Button from './../../../common/button/Button';



class HeaderTabs extends Component {
    render() {
        return (
            <div className="header-tabs">
                {
                    this.props.data.map(item => <Button {...item}/>)
                }   
            </div>
        );
    }
}  
export default HeaderTabs;