import React, {Component} from 'react';
import Input from './../input/Input';
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Search extends Component {
    render() {
        return (
            <div className="search">
                {/* <div className="input-wrapper">*/}
                    <FontAwesomeIcon className="search-icon" icon="search" />
                    <Input placeholder="Search"/>
        {/* </div>*/}
            </div>
        );
    }
}
export default Search;