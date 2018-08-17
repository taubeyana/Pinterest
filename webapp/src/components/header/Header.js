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
        this.currentUser = {name: 'Yana', img: 'https://goo.gl/ryHGRR'}
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
                    text: this.currentUser.name,
                    img: this.currentUser.img,
                    className: "header-tab",
                    buttonType: 'link',
                    href: "#"
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
