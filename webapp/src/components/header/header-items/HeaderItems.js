import React, {Component} from 'react';
import './HeaderItems.css';
import HeaderItem from './../header-item/HeaderItem';



class HeaderItems extends Component {
    render() {
        console.log(this.props.data);
        return (
            <ul className="header-items">
                {
                    this.props.data.map(item => <HeaderItem {...item}/>)
                }
            </ul>
        );
    }
}  
export default HeaderItems;