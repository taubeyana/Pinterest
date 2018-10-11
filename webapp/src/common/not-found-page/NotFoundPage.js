import React from 'react';
import Button from '../button/Button';
import './NotFoundPage.css';
import ContentWrapper from '../content-wrapper/ContentWrapper';
import magnifyingGlassImg from '../../img/magnifying-glass2.png'
const NotFoundPage = () => (
    <ContentWrapper>
        <div class="wrapper-404">
            <img src={ magnifyingGlassImg }/>
            <h1> 404 </h1>
            <h2> OOPS! </h2>
            <span> The page can't be found </span>
            <Button 
                buttonType = 'router-link' 
                to = '/' 
                text = 'Go Home...'
                className = 'home-btn'>
            </Button>
        </div>
    </ContentWrapper>
)
export default NotFoundPage;
