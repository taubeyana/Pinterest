import React, {Component} from 'react';
import './Header.css'
import Search from './../common/search/Search';
import HeaderItems from './header-tabs/HeaderTabs';
import HeaderMenus from './header-menus/HeaderMenus';

import Logo from './logo/Logo';
import logoimg from './../../img/logo.png';

class Header extends Component {
    render() {
        const headerItemsData = [
            {
                text: "Home",
                isShownIcon: false
            },
            {
                text: "Following",
                isShownIcon: false
            },
            {
                text: "Explore",
                isShownIcon: false
            },
            {
                text: "Yana",
                isShownIcon: true
            },

        ]
            
        return (
            <header>
                <Logo src={logoimg}/>
                <Search/>
                <HeaderItems data={headerItemsData}/>
                <HeaderMenus/>
            </header>
        );
    }
}
export default Header;
