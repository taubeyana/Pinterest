import React, { Component } from 'react';
import './Header.css'
import Search from './../../common/search/Search';
import HeaderTabs from './header-tabs/HeaderTabs';
import HeaderMenus from './header-menus/HeaderMenus';
import Button from './../../common/button/Button';
import logoimg from './../../img/logo.png';
import { connect } from 'react-redux';
import { fetchUserFromDb } from '../../store/actions/usersActions'
class Header extends Component {
    componentDidMount() {
        this.props.fetchUserFromDb('5bc502c18b4af24170a04306')
    }
    render() {
        return (
            <header>
                <Button 
                    buttonType = "router-link" 
                    className = "logo" 
                    img = { logoimg } 
                    alt = "logoimg"
                    to = '/' />
                <Search/>
                <HeaderTabs user = { this.props.currentUser }/>
                <HeaderMenus/>
            </header>
        );
    }
}
const mapStateToProps = state => {
    return {
        currentUser: state.usersReducer.currentUser
    }
}
const mapDispatchToProps = dispatch => {
    return {
        fetchUserFromDb: (id) => dispatch(fetchUserFromDb(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);
