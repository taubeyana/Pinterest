import React, {Component} from 'react';
import './Pin.css';
import SaveButton from './../../../common/save-button/SaveButton';
import ReportButton from './../../../common/report-button/ReportButton';
import OptionsMenu from './options-menu/OptionsMenu';
import SelectMenu from './../../../common/select-menu/SelectMenu';
import Button from '../../../common/button/Button';


class Pin extends Component {
    render() {
        return (
            <div className='pin grid-item'>
                <img src={this.props.img} alt={this.props.alt} />
                <SelectMenu/>
                <div className="options-wrapper">
                    <span>{this.props.title}</span>
                    <OptionsMenu/>
                    <Button text={this.props.link.slice(7)} href={this.props.link} buttonType="link" faIcon="external-link-alt"/>
                </div>
            </div>
        );
    }

}
export default Pin;
// <Button text="" buttonType="link" faIcon="external-link-alt"/>
