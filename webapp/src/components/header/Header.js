import React, {Component} from 'react';
import './Header.css'
import Search from './../search/Search';
class Header extends Component {
    render() {
        return (
            <header>
                <img className='logo' src={this.props.logo}/>
                <Search/>
            </header>
        );
    }
}
export default Header;
