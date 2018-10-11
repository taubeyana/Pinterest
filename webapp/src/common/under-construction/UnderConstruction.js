import React, { Component } from 'react';
import './UnderConstruction.css';
import ContentWrapper from '../content-wrapper/ContentWrapper';
import underConstructionImage from '../../img/under-construction1.png'
class UnderConstruction extends Component {
    render() {
        return (
            <ContentWrapper> 
                <div className = 'under-construction-content'> 
                    <div className = "img-wrapper">
                        <img src={underConstructionImage}></img>
                    </div>
                    <h1> This page is still under construction </h1>
                </div>
            </ContentWrapper>
         )
    }
}

export default UnderConstruction;