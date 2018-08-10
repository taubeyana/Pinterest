import React, {Component} from 'react';
import './Logo.css';


class Logo extends Component {
    render() {
        return (
            <div className="logo-wrapper">
                <img className="logo" src={this.props.src} alt={this.props.alt}/>
            </div>
        );
    }
}
export default Logo;