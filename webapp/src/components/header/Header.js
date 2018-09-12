import React, { Component } from 'react';
import './Header.css'
import Search from './../../common/search/Search';
import HeaderTabs from './header-tabs/HeaderTabs';
import HeaderMenus from './header-menus/HeaderMenus';
import Button from './../../common/button/Button';
import logoimg from './../../img/logo.png';

class Header extends Component {
    constructor(props) {
        super(props);

        this.currentUser = {
            name: 'Yana',
            img: 'https://goo.gl/ryHGRR',
            username: 'taubeyana'
        }
    }
    render() {
        return (
            <header>
                <Button 
                    buttonType = "link" 
                    className = "logo" 
                    img = { logoimg } 
                    alt = "logoimg"
                    href = "/"/>
                <Search/>
                <HeaderTabs user = {  this.currentUser }/>
                <HeaderMenus/>
            </header>
        );
    }
}


export default Header;
