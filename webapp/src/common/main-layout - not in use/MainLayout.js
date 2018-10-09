import React from 'react';
import Header from '../../components/header/Header';
import { connect } from 'react-redux';
import { Component } from 'react';

import {displayHeader} from '../../store/actions/appActions'
class MainLayout extends Component {
    render() {
        return (
            this.props.headerIsDisplayed ? <Header/> : null 
         )
    }
}
const mapStateToProps = (state) => ({
    headerIsDisplayed: state.appReducer.headerIsDisplayed

})
const mapDispatchToProps = dispatch => {
    return {
        displayHeader: dispatch(displayHeader(true))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(MainLayout)
