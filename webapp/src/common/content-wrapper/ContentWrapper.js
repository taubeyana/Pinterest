import React from 'react';
import './ContentWrapper.css';

const ContentWrapper = (props) => (
    <div className = { props.className + ' content-wrapper' || 'content-wrapper'}> 
       { props.children }
    </div>
) 

export default ContentWrapper;