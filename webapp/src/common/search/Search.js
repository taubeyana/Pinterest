import React, {Component} from 'react';
import Input from './../input/Input';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Search extends Component {
    render() {
        return (
            <div className="search" >
                <FontAwesomeIcon className="search-icon" icon="search" />
                <Input placeholder="Search"/>
            </div>
        );
    }
}
export default Search;