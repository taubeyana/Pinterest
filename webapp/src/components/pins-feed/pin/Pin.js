import React, {Component} from 'react';
import './Pin.css';
import SaveButton from './../../../common/save-button/SaveButton';
import ReportButton from './../../../common/report-button/ReportButton';
import OptionsMenu from './options-menu/OptionsMenu';
import SelectMenu from './../../../common/select-menu/SelectMenu';
import Button from '../../../common/button/Button';


class Pin extends Component {
    render() {
        const pins= this.props.data;
        return (
            pins.map(pin => {
                return (<div className='pin grid-item'>
                <img src={pin.img} alt={pin.alt} />
                <SelectMenu/>
                <div className="options-wrapper">
                    <span>{pin.title}</span>
                    <OptionsMenu/>
                    <Button text={pin.link.slice(7)} href={pin.link} buttonType="link" faIcon="external-link-alt" className="pin-link"/>
                </div>
            </div>)
            })
           
        );
    }

}
export default Pin;
// <Button text="" buttonType="link" faIcon="external-link-alt"/>
