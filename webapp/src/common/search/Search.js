import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from './../input/Input';
import Axios from 'axios'
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {getRelevantPins} from '../../store/actions/pinsActions';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: null
        }
    }
    handleChange(e) {
        // this.setState = {...this.state, searchValue: e.target.value}
    }
    handleKeyPress(e) {
        if (e.key === "Enter") {
            this.props.dispatch(getRelevantPins(e.target.value))
        }


        
        
    }
    render() {
        return (
            <div className = {this.props.className || "search"} >
                <FontAwesomeIcon className = "search-icon" icon = "search" />
                <Input 
                    placeholder = "Search" 
                    value = {this.state.inputValue}
                    onKeyPress = { e => this.handleKeyPress.bind(this)(e)}/>
            </div>
        );
    }
    
}
export default connect()(Search);
// (e) => this.handleChange.bind(this)(e)
// const Search = (props) => {
//     return (
//         <div className = {props.className || "search"} >
//         <FontAwesomeIcon className = "search-icon" icon = "search" />
//         <Input placeholder = "Search"/>
//         </div>
//     );
// }