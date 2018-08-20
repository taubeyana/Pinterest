import React, {Component} from 'react';
import './Pin.css';
import OptionsMenu from './options-menu/OptionsMenu';
import SelectMenu from './../../../common/select-menu/SelectMenu';
import Button from '../../../common/button/Button';


class Pin extends Component {
    render() {
        console.log(this.props.data)
        return (
            
            <div className='pin grid-item' key={this.props.data.key}>
                <img src={this.props.data.img} alt={this.props.data.alt} />
                <SelectMenu/>
                <div className="options-wrapper">
                    <span>{this.props.data.title}</span>
                    <OptionsMenu/>
                    <Button text={this.props.data.link.slice(7)} href={this.props.data.link} buttonType="link" faIcon="external-link-alt" className="pin-link"/>
                </div>
            </div>
           
           
        );
    }

}
export default Pin;
