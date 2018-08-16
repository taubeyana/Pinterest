import React, {Component} from 'react';
import './Header.css'
import Search from './../../common/search/Search';
import HeaderTabs from './header-tabs/HeaderTabs';
import HeaderMenus from './header-menus/HeaderMenus';

import Logo from './logo/Logo';
import logoimg from './../../img/logo.png';

class Header extends Component {
    constructor(props) {
        super(props);
        this.currentUser = {name: 'Yana', img: 'https://goo.gl/BPwvBt'}
        this.state = {
            tabsData: [
                {
                    text: "Home",
                    isShownIcon: false,
                    className: "header-tab"
                },
                {
                    text: "Following",
                    isShownIcon: false,
                    className: "header-tab"
                },
                {
                    text: "Explore",
                    isShownIcon: false,
                    className: "header-tab"
                },
                {
                    text: this.currentUser.name,
                    isShownIcon: true,
                    img: this.currentUser.img,
                    className: "header-tab"
                },
            ]
        }
    }

    render() {
        return (
            <header>
                <Logo src={logoimg}/>
                <Search/>
                <HeaderTabs data={this.state.tabsData}/>
                <HeaderMenus/>
            </header>
        );
    }
}
export default Header;
