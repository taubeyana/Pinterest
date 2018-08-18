import React, {Component} from 'react';
import './SaveButton.css';
import Button from './../button/Button';

class SaveButton extends Component {
    render() {
        return(
            <Button buttonType="button" text="Save" className="save-btn red-btn"/>
        )
    }
}
export default SaveButton;