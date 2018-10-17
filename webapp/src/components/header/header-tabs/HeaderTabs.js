import React, { Component } from 'react';
import './HeaderTabs.css';
import Button from './../../../common/button/Button';
import uniqid from 'uniqid';

class HeaderTabs extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tabsData: [
                {
                    text: "Home",
                    className: "header-tab",
                    activeClassName: 'active-header-tab',
                    buttonType: 'router-link',
                    to: "/"
                },
                {
                    text: "Following",
                    faIcon: "user-friends",
                    className: "header-tab",
                    activeClassName: 'active-header-tab',
                    buttonType: 'router-link',
                    to: "/following"
                },
                {
                    text: "Explore",
                    className: "header-tab",
                    activeClassName: 'active-header-tab',
                    faIcon: "compass",
                    buttonType: 'router-link',
                    to: "/explore"
                },
                
            ]
        }
    }
    render() {
        const user =  {
            text: this.props.user.firstName,
            img: this.props.user.img,
            className: "header-tab",
            activeClassName: 'active-header-tab',
            buttonType: 'router-link',
            to: '/' + this.props.user.username
        }
        return (
            <div className = "header-tabs">
                {
                    this.state.tabsData.map(item => <Button { ...item } key={ uniqid() }/>)
                }
                <Button { ...user } />
            </div>
            
        );
    }
}  
export default HeaderTabs