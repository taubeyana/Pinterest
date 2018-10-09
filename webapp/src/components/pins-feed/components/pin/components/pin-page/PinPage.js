import React, { Component } from 'react';
import './PinPage.css';
import Button from '../../../../../../common/button/Button'

const PinPage = (props) => {
    console.log(props)
    return (
        <div className = 'content-wrapper'> 
            <h1>pin page</h1>
            <img src = { props.src } alt = { props.alt }/>
            <div className = 'pin-details'>
                <h1> { props.title } </h1>
                <p> { props.body } </p>
                <Button 
                        text = { props.link } 
                        href = { props.link } 
                        buttonType = "link" 
                        faIcon = "external-link-alt" 
                        className = "pin-link">
                    </Button>
            </div>
        </div>
    )
}

export default PinPage