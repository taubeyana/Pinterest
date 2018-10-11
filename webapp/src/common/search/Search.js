import React from 'react';
import Input from './../input/Input';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Search = (props) => {
    return (
        <div className = {props.className || "search"} >
        <FontAwesomeIcon className = "search-icon" icon = "search" />
        <Input placeholder = "Search"/>
        </div>
    );
}
export default Search;