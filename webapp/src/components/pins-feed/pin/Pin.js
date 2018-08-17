import React, {Component} from 'react';
import './Pin.css';
import Button from './../../../common/button/Button';

class Pin extends Component {
    render() {
        return (
            <div className='pin'>
                <Button buttonType="button" faIcon="external-link-alt" text="externallinkalt" className="className"/>
                <Button buttonType="button" type="button" text="Save"/>
                <Button buttonType="button" type="button" src="https://goo.gl/ryHGRR" text="Profile" />
            </div>
        );
    }

}
export default Pin;