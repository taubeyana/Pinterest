import React, {Component} from 'react';
import './Header.css'
import Search from './../common/search/Search';
import HeaderItems from './header-items/HeaderItems';
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
                text: "User",
                isShownIcon: true
            },

        ]
            
        return (
            <header>
                <Logo src={logoimg}/>
                <Search/>
                <HeaderItems data={headerItemsData}/>
            </header>
        );
    }
}
export default Header;
