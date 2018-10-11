import React, { Component } from 'react';
import {ReactDOM, findDOMNode } from 'react-dom'
import './OptionsMenu.css';
import Menu from './../../../../../../common/menu/Menu';
import SendButton from './../../../../../../common/send-button/SendButton';
import ReportButton from './../../../../../../common/report-button/ReportButton';
import uniqid from 'uniqid';

class OptionsMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menus: [
                {
                    name: "options",
                    menuIcon: "ellipsis-h",
                    buttonType: 'button',
                    menuItems: [
                        {
                            text: 'Remove Pin',
                            buttonType: 'button',
                            faIcon: "times",
                            className: 'hide-btn',
                            handleClick: this.props.handleClick,
                        },
                    ],
                    menuType: "up",
                    common: [{
                        name: 'SendButton'
                    }]
                }
            ]
        }
    }
    render() {
        return (
            this.state.menus.map(item => {
              return  <Menu item={ item } key={ uniqid()  } />
            })
        )
    }
}

export default OptionsMenu;

// <SendButton/>
// <ReportButton/>