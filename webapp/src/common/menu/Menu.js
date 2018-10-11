import React, { Component } from 'react';
import Button from './../button/Button';
import Triangle from './../triangle/Triangle';
import './Menu.css';
import uniqid from 'uniqid';

class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = { isDisplayed: true }
        this.menuStyle = { visibility: "hidden" }
        this.toggle = this.toggle.bind(this)
    }
    toggle(e) {
        this.setState({ isDisplayed: !this.state.isDisplayed })
        if  (this.state.isDisplayed === true) {
            this.menuStyle = { visibility: "visible" }
        }
        else {
            this.menuStyle = { visibility: "hidden" }
        }
    }
    render() {
        return (
            <div className = { this.props.item.name + "-menu menu" }>
                {  this.props.item.menuIcon ?
                    <Button 
                        faIcon = { this.props.item.menuIcon } 
                        className = { this.props.item.name + "-menu-btn menu-btn" } 
                        buttonType = { this.props.item.buttonType } 
                        handleClick = { (e) => this.toggle() }/> : null
                }
                {   this.props.item.menuItems ?
                        <div className = "items-outer-wrapper" style = { this.menuStyle }>
                        <div className = "items-inner-wrapper">
                    { this.props.item.menuType ?
                        <Triangle direction = { this.props.item.menuType || "up"}></Triangle> 
                        : null 
                    }
                    { this.props.item.menuItems.map( 
                        btn => <Button 
                                text = { btn.text } 
                                faIcon = { btn.faIcon } 
                                buttonType = { btn.buttonType } 
                                className = { btn.className } 
                                key = { uniqid() }
                                id = { btn.id }
                                handleClick = {(e) => btn.handleClick(e) } />
                        )}
                    { this.props.children }
                        </div>
                        </div> 
                    : null
                }
            </div>
        );
    }
}
export default Menu;