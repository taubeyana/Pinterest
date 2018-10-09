import React, { Component } from 'react';
import './UnderConstruction.css';
import ContentWrapper from '../content-wrapper/ContentWrapper';
class UnderConstruction extends Component {
    render() {
        return (
            <ContentWrapper> 
                <h1> This page is still under construction </h1>
            </ContentWrapper>
         )
    }
}

export default UnderConstruction;