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
                    buttonType: 'link',
                    href: "#"
                },
                {
                    text: "Following",
                    className: "header-tab",
                    buttonType: 'link',
                    href: "#"
                },
                {
                    text: "Explore",
                    className: "header-tab",
                    buttonType: 'link',
                    href: "#"
                },
                {
                    text: this.props.user.name,
                    img: this.props.user.img,
                    className: "header-tab",
                    buttonType: 'link',
                    href: "#"
                },
            ]
        }
    }
    render() {
        return (
            <div className = "header-tabs">
                {
                    this.state.tabsData.map(item => <Button { ...item } key={ uniqid() }/>)
                }   
            </div>
        );
    }
}  
export default HeaderTabs;