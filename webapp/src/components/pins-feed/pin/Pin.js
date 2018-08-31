import React, {Component} from 'react';
import './Pin.css';
import OptionsMenu from './options-menu/OptionsMenu';
import SelectMenu from './../../../common/select-menu/SelectMenu';
import Button from '../../../common/button/Button';


class Pin extends Component {
    constructor(props) {
        super(props)
    }
    shortSiteLink(link) {
        const regex = /^(https?:\/\/)(.+?\.)?(.*?\..+?)(\/)(.+)?/gm
        return regex.exec(link)[3]
    }
    truncateString(str) {
        return  str.length > 50 ? str.slice(0, 50) + '...' : str
        // return str.slice(0, maxLength) + '...'
    }
    render() {
        return (
            <div className='pin grid-item' key={this.props.data.key} >
                <div className="img-wrapper">
                    <img src={this.props.data.img} alt={this.props.data.alt} />
                    <Button style={this.menuStyle} text={this.shortSiteLink(this.props.data.link)} href={this.props.data.link} buttonType="link" faIcon="external-link-alt" className="pin-link"/>
                </div>
                <SelectMenu style={this.menuStyle}/>
                <div className="options-wrapper">
                    <span>{this.truncateString(this.props.data.title)}</span>
                    <OptionsMenu/>
                </div>
            </div>
        );
    }
}
export default Pin;